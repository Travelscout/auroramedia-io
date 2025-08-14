"use client";

import React, { type ReactElement } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader(): ReactElement {
  return (
    <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/" className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-400 flex items-center justify-center text-white font-bold" aria-label="AuroraMedia Startseite">
          A
        </Link>
        <div>
          <div className="font-semibold">AuroraMedia</div>
          <div className="text-xs text-slate-500 -mt-1">AI-Agenten &amp; Automatisierung — Düsseldorf</div>
        </div>
      </div>
      <nav className="hidden md:flex gap-6 items-center text-sm">
        <Link className="hover:underline" href="/#features">Leistungen</Link>
        <Link className="hover:underline" href="/#ai-demo">AI Demo</Link>
        <Link className="hover:underline" href="/preise">Preise</Link>
        <Link className="hover:underline" href="/loesungen">Lösungen</Link>
        <Link className="hover:underline" href="/branchen">Branchen</Link>
        <Link className="hover:underline" href="/ueber-uns">Über uns</Link>
        <Link className="hover:underline" href="/cases">Cases</Link>
        <Link className="hover:underline" href="/blog">Blog</Link>
        <Link className="hover:underline" href="/kontakt">Kontakt</Link>
        <Button size="sm" asChild>
          <Link href="/kontakt">Kostenloses Audit</Link>
        </Button>
      </nav>
    </header>
  );
}


