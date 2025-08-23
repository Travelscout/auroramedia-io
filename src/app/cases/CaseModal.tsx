"use client";

import React, { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  triggerLabel?: string;
  title: string;
  children: ReactNode;
};

export default function CaseModal({ triggerLabel = "Mehr erfahren", title, children }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open}>
        {triggerLabel}
      </Button>
      {open && (
        <div role="dialog" aria-modal="true" aria-labelledby="case-modal-title" className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          {/* Panel */}
          <div className="relative z-10 mx-auto my-6 w-[min(92vw,900px)]">
            <div className="rounded-3xl border shadow-2xl bg-white overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-indigo-50 to-pink-50 px-6 py-4 flex items-center justify-between">
                <h2 id="case-modal-title" className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">
                  {title}
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-white/70 text-slate-600 hover:bg-white"
                  aria-label="Schließen"
                >
                  ×
                </button>
              </div>
              {/* Body */}
              <div className="px-6 py-5 max-h-[70vh] overflow-y-auto">
                <div className="prose prose-slate prose-headings:scroll-mt-20 prose-h3:mt-6 prose-h3:mb-3 prose-h4:mt-5 prose-h4:mb-2 prose-p:leading-relaxed prose-li:leading-relaxed max-w-none">
                  {/* Callout-Legende */}
                  <div className="mb-4 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-1">Nutzen</span>
                    <span className="rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-1">Lösung</span>
                    <span className="rounded-full bg-rose-50 text-rose-700 border border-rose-200 px-2 py-1">Problem</span>
                  </div>
                  {children}
                </div>
              </div>
              {/* Footer */}
              <div className="px-6 pb-6 flex items-center justify-between gap-3">
                <div className="text-xs text-slate-500">DSGVO‑konforme Beispiele · Pilot in 14 Tagen möglich</div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setOpen(false)}>Schließen</Button>
                  <Button asChild>
                    <a href="/kontakt">Kontakt aufnehmen</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


