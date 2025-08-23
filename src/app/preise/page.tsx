export const metadata = {
  title: "Preise | AuroraMedia.io",
  description: "Vergleich ohne MRR: Aurora Start, Aurora Scale und Aurora Enterprise.",
};

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, X } from "lucide-react";

type PlanKey = "start" | "scale" | "enterprise";

const PLANS: Record<PlanKey, { name: string; price: string; cta: string; featured?: boolean; bullets: string[] }> = {
  start: {
    name: "Aurora Start",
    price: "199 €",
    cta: "Jetzt starten",
    bullets: [
      "1–2 Automatisierungen",
      "WhatsApp oder E-Mail",
      "Standard-Bot",
      "EU-Cloud Hosting",
      "E-Mail Support",
    ],
  },
  scale: {
    name: "Aurora Scale",
    price: "499 €",
    cta: "Meistgewählt",
    featured: true,
    bullets: [
      "3–5 komplexe Workflows",
      "WhatsApp, E-Mail, Webchat",
      "Intent-Erkennung & RAG",
      "Erweiterte DSGVO-Option",
      "Priorisierter E-Mail & Chat",
    ],
  },
  enterprise: {
    name: "Aurora Enterprise",
    price: "Preis auf Anfrage",
    cta: "Preis anfragen",
    bullets: [
      "Unbegrenzte Workflows",
      "Omnichannel inkl. Social & Voice",
      "Individuelles LLM (OpenAI, lokal, Azure)",
      "DE/EU-Hosting mit Datenisolierung",
      "24/7 Support mit Account Manager",
    ],
  },
};

const MATRIX: Array<{
  label: string;
  start: boolean | string;
  scale: boolean | string;
  enterprise: boolean | string;
}> = [
  { label: "Automatisierungen", start: "1–2", scale: "3–5", enterprise: "unbegrenzt" },
  { label: "Kanäle", start: "WA/E-Mail", scale: "WA/E-Mail/Webchat", enterprise: "Omnichannel + Voice" },
  { label: "Conversational AI", start: "Standard-Bot", scale: "Intent + RAG", enterprise: "Custom LLM" },
  { label: "DSGVO-Hosting", start: "EU-Cloud", scale: "Erweitert", enterprise: "DE/EU isoliert" },
  { label: "Reporting", start: "Monatlich", scale: "Dashboard", enterprise: "Echtzeit" },
  { label: "Support", start: "E-Mail", scale: "Priorisiert (Mail/Chat)", enterprise: "24/7 + AM" },
  { label: "Schulung", start: "Video", scale: "Live (1h)", enterprise: "Team-Training" },
  { label: "CRM-Integration", start: true, scale: true, enterprise: true },
  { label: "Custom APIs", start: false, scale: true, enterprise: true },
];

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Preise</h1>
      <p className="mt-2 text-slate-600">Transparente Pakete. Alles Wichtige ist inklusive – klar markiert mit grünen Haken.</p>

      <div className="mt-10 overflow-x-auto">
        <div className="min-w-[800px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(["start", "scale", "enterprise"] as PlanKey[]).map((key) => (
              <Card key={key} className={`border ${PLANS[key].featured ? "ring-2 ring-indigo-500" : ""}`}>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold">{PLANS[key].name}</h2>
                    {PLANS[key].featured && <Badge>Meistgewählt</Badge>}
                  </div>
                  <div className="mt-2 text-3xl font-extrabold">{PLANS[key].price}</div>
                  <ul className="mt-4 text-sm text-slate-700 space-y-2">
                    {PLANS[key].bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 text-green-600" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full" variant={PLANS[key].featured ? "default" : "outline"} asChild>
                    <Link href={`/kontakt?plan=${key}`}>{PLANS[key].cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 rounded-lg border overflow-hidden">
            <div className="grid grid-cols-4 bg-slate-50/70 p-4 text-sm font-medium">
              <div>Leistung</div>
              <div>Aurora Start</div>
              <div>Aurora Scale</div>
              <div>Aurora Enterprise</div>
            </div>
            <div className="divide-y">
              {MATRIX.map((row) => (
                <div key={row.label} className="grid grid-cols-4 gap-4 p-4 text-sm bg-white">
                  <div className="font-medium">{row.label}</div>
                  <div className="text-slate-700 flex items-center gap-2">
                    {typeof row.start === "boolean"
                      ? (row.start ? <Check className="h-4 w-4 text-green-600" /> : <X className="h-4 w-4 text-rose-500" />)
                      : row.start}
                  </div>
                  <div className="text-slate-700 flex items-center gap-2">
                    {typeof row.scale === "boolean"
                      ? (row.scale ? <Check className="h-4 w-4 text-green-600" /> : <X className="h-4 w-4 text-rose-500" />)
                      : row.scale}
                  </div>
                  <div className="text-slate-700 flex items-center gap-2">
                    {typeof row.enterprise === "boolean"
                      ? (row.enterprise ? <Check className="h-4 w-4 text-green-600" /> : <X className="h-4 w-4 text-rose-500" />)
                      : row.enterprise}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </main>
  );
}


