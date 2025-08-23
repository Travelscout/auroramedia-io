import { NextRequest, NextResponse } from "next/server";
import { retrieve } from "@/lib/rag";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Nachricht ist erforderlich" }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API key fehlt" }, { status: 500 });
    }

    const context = await retrieve(message, apiKey, 3);
    const prompt = `Du bist ein hilfreicher Assistent von AuroraMedia.io. Nutze strikt den bereitgestellten Kontext, antworte knapp, deutsch, und nenne am Ende 'Quellen'.\n\nKontext:\n${context
      .map((c, i) => `(${i + 1}) ${c.chunk}`)
      .join("\n\n")}\n\nFrage: ${message}\nAntwort:`;

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "Du bist der AuroraMedia Wissensassistent." },
          { role: "user", content: prompt },
        ],
        temperature: 0.3,
      }),
    });

    if (!r.ok) {
      const e = await r.text();
      return NextResponse.json({ error: e }, { status: 500 });
    }
    const data = await r.json();
    const reply = data.choices?.[0]?.message?.content ?? "";
    const sources = context.map((c, i) => ({ index: i + 1, title: c.source.title, slug: c.source.slug }));
    return NextResponse.json({ reply, sources });
      } catch {
    return NextResponse.json({ error: "Interner Fehler" }, { status: 500 });
  }
}


