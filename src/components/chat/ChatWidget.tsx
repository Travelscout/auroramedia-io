'use client'

import { useEffect, useMemo, useRef, useState } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

type ChatMsg = { role: 'user' | 'assistant'; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([
    { role: 'assistant', content: 'Hallo! Ich bin der Aurora Wissensassistent. Frag mich etwas zu unseren Leistungen, DSGVO oder Preisen.' },
  ]);
  const [sources, setSources] = useState<{ index: number; title: string; slug: string }[]>([]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, open]);

  const quick = useMemo(
    () => [
      'Was umfasst Aurora Scale?',
      'Welche DSGVO-Optionen habt ihr?',
      'Wie funktioniert euer RAG-Ansatz?',
    ],
    []
  );

  async function send(msg?: string) {
    const text = (msg ?? input).trim();
    if (!text) return;
    setInput('');
    setLoading(true);
    setMessages((m) => [...m, { role: 'user', content: text }]);
    try {
      const r = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const data = await r.json();
      if (data.reply) setMessages((m) => [...m, { role: 'assistant', content: data.reply }]);
      if (Array.isArray(data.sources)) setSources(data.sources);
    } catch {
      setMessages((m) => [...m, { role: 'assistant', content: 'Entschuldigung, gerade gibt es ein Problem.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {!open && (
        <Button onClick={() => setOpen(true)} className="shadow-lg">
          <MessageSquare className="w-4 h-4" /> Wissenschat
        </Button>
      )}

      {open && (
        <div className="w-[360px] h-[520px] bg-white rounded-xl border shadow-xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="font-semibold">Aurora Wissenschat</div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Schließen">
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-slate-50/40">
            {messages.map((m, idx) => (
              <div key={idx} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                <div className={`inline-block px-3 py-2 rounded-lg text-sm ${m.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-white border'}`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          {sources.length > 0 && (
            <div className="px-4 py-2 text-xs text-slate-600 border-t bg-slate-50">
              Quellen:
              <ul className="list-disc pl-5">
                {sources.map((s) => (
                  <li key={s.index}>
                    <Link className="underline" href={`/blog/${s.slug}`} target="_blank">{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="px-3 py-2 border-t bg-white">
            <div className="flex gap-2 mb-2 flex-wrap">
              {quick.map((q) => (
                <button key={q} onClick={() => send(q)} className="text-xs bg-slate-100 hover:bg-slate-200 rounded px-2 py-1">
                  {q}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex gap-2"
            >
              <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Frage stellen…" disabled={loading} />
              <Button type="submit" disabled={loading || !input.trim()}>
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}


