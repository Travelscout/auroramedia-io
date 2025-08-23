// Single-File React Preview (Next.js-kompatibel)
// Hinweise zur Integration von shadcn/ui in Next.js:
// 1) Tailwind konfigurieren (postcss, tailwind.config, globals.css).
// 2) shadcn installieren: npx shadcn@latest init  (oder @shadcn/ui gemäß Doku)
// 3) Komponenten generieren: npx shadcn add button card input badge
// 4) Komponenten werden unter "@/components/ui/*" exportiert.

import * as React from "react";
// Optional: import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function HomepagePreview() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between" role="banner" aria-label="Seitenkopf">
        <Link href="/" className="flex items-center gap-3" aria-label="Startseite">
          <Image src="/images/auroramedia-logo.png" alt="AuroraMedia Logo" width={180} height={36} className="h-9 w-auto" />
        </Link>
        <nav aria-label="Hauptnavigation" className="hidden md:flex gap-6 text-sm">
          <Link href="#leistungen" className="hover:underline">Leistungen</Link>
          <Link href="#kpis" className="hover:underline">Ergebnisse</Link>
          <Link href="#kontakt" className="hover:underline">Kontakt</Link>
          <Button asChild size="sm"><a href="#kontakt" aria-label="Kostenloses Erstgespräch">Kostenloses Erstgespräch</a></Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Badge className="mb-4">Pilot in 14 Tagen</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            KI‑Agenten & Automatisierung für KMU, Kliniken & MedTech
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Wir bauen Conversational AI, Voicebots und n8n‑Workflows – DSGVO‑konform in EU/DE. Schnelle Time‑to‑Value durch klare Prozesse und messbare KPIs.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <Button aria-label="Kostenloses Erstgespräch">Kostenloses Erstgespräch</Button>
            <Button variant="outline" aria-label="Pilot anfragen">Pilot anfragen</Button>
          </div>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <li className="flex items-center gap-2"><span className="font-medium">AI‑Agenten Deutschland</span> – Vertrieb & Support</li>
            <li className="flex items-center gap-2"><span className="font-medium">Voicebot Arztpraxis</span> – Termin & Anamnese</li>
            <li className="flex items-center gap-2"><span className="font-medium">n8n Automatisierung</span> – CRM/ERP/Telefonie</li>
            <li className="flex items-center gap-2"><span className="font-medium">Automatisierung KMU</span> – durchgängige Flows</li>
          </ul>
        </div>

        {/* Live-Demo-Card */}
        <Card className="bg-white/70 backdrop-blur">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Live AI‑Preview</div>
              <div className="text-xs text-slate-400">Interaktiv</div>
            </div>
            <div className="mt-4 space-y-3">
              <label htmlFor="question" className="sr-only">Frage stellen</label>
              <Input id="question" placeholder="Ihre Frage …" aria-label="Ihre Frage eingeben" />
              <div className="flex gap-2">
                <Button size="sm" aria-label="Absenden">Senden</Button>
                <Button size="sm" variant="outline" aria-label="Use Case berechnen">Use Case berechnen</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold">Unsere Kernleistungen</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { title: "AI‑Agenten & Voicebots", desc: "Webchat, WhatsApp, Telefon – 24/7, mehrsprachig, DSGVO." },
            { title: "n8n & Integrationen", desc: "Trigger, Webhooks, CRM/ERP & Telefonie – Ende‑zu‑Ende Flows." },
            { title: "Content & Channel Growth", desc: "YouTube & Social automatisiert – ohne Qualitätsverlust." }
          ].map((f) => (
            <Card key={f.title} aria-label={f.title}>
              <CardContent className="p-5">
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* KPIs */}
      <section id="kpis" className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-semibold">Erwartbare Ergebnisse (Beispiele)</h2>
        <ul className="mt-4 grid sm:grid-cols-3 gap-4 text-sm">
          <li className="p-4 rounded-xl bg-white shadow">−40 % Telefonaufkommen in 8 Wochen</li>
          <li className="p-4 rounded-xl bg-white shadow">+25 % Conversion durch Vorqualifizierung</li>
          <li className="p-4 rounded-xl bg-white shadow">&lt;2 Sek. Antwortzeit im Chat/Telefon</li>
        </ul>
        <p className="mt-4 text-xs text-slate-500">Hinweis: Beispielwerte. Wir definieren KPIs pro Pilot.</p>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-xl font-semibold">Bereit für den Pilot?</h2>
            <p className="text-slate-600 mt-2">DSGVO‑konform in EU/DE, AVV inklusive. Proof‑of‑Value in 14 Tagen.</p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <Button aria-label="Kostenloses Erstgespräch">Kostenloses Erstgespräch</Button>
            <Button variant="outline" aria-label="Pilot anfragen">Pilot anfragen</Button>
          </div>
        </div>
      </footer>
    </main>
  );
}
