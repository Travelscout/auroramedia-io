import crypto from "crypto";
import { BLOG_POSTS } from "./blog-content";

export type RetrievedChunk = {
  chunk: string;
  score: number;
  source: { title: string; slug: string };
};

const OPENAI_URL = "https://api.openai.com/v1/embeddings";
const EMBEDDING_MODEL = "text-embedding-3-small";

const embeddingCache = new Map<string, number[]>();

function sha256(text: string): string {
  return crypto.createHash("sha256").update(text).digest("hex");
}

export function buildKnowledgeBase(): { text: string; meta: { title: string; slug: string } }[] {
  const CHARS = 900; // kurze Chunks für präzises Retrieval
  const chunks: { text: string; meta: { title: string; slug: string } }[] = [];
  for (const post of BLOG_POSTS) {
    const content = post.content.replace(/\s+/g, " ").trim();
    for (let i = 0; i < content.length; i += CHARS) {
      const slice = content.slice(i, i + CHARS);
      chunks.push({ text: slice, meta: { title: post.title, slug: post.slug } });
    }
  }
  return chunks;
}

async function embedTexts(texts: string[], apiKey: string): Promise<number[][]> {
  const hashes = texts.map(sha256);
  const toFetch: string[] = [];
  const result: (number[] | null)[] = new Array(texts.length).fill(null);

  hashes.forEach((h, i) => {
    if (embeddingCache.has(h)) result[i] = embeddingCache.get(h)!;
    else toFetch.push(texts[i]);
  });

  if (toFetch.length > 0) {
    const r = await fetch(OPENAI_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model: EMBEDDING_MODEL, input: toFetch }),
    });
    if (!r.ok) throw new Error(`Embeddings HTTP ${r.status}`);
    const data = await r.json();
    let fetchIdx = 0;
    hashes.forEach((h, i) => {
      if (!result[i]) {
        const vec = data.data[fetchIdx++].embedding as number[];
        embeddingCache.set(h, vec);
        result[i] = vec;
      }
    });
  }

  return result as number[][];
}

function cosine(a: number[], b: number[]): number {
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

export async function retrieve(query: string, apiKey: string, topK = 3): Promise<RetrievedChunk[]> {
  const kb = buildKnowledgeBase();
  const [qVec] = await embedTexts([query], apiKey);
  const texts = kb.map(k => k.text);
  const vecs = await embedTexts(texts, apiKey);
  const scored: RetrievedChunk[] = vecs.map((v, i) => ({
    chunk: kb[i].text,
    score: cosine(qVec, v),
    source: kb[i].meta,
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, topK);
}


