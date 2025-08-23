export const metadata = {
  title: "Branchen | AuroraMedia",
  description: "Ärzte & Kliniken, KMU, MedTech.",
};

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Stethoscope, Building2, Activity, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <main className="relative max-w-7xl mx-auto px-6 py-12">
      {/* Deko-Gradient */}
      <div aria-hidden className="pointer-events-none absolute -z-10 top-0 right-0 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -z-10 bottom-10 left-0 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />

      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold">Branchen</h1>
        <Badge>EU/DE Hosting</Badge>
      </div>
      <p className="mt-3 text-slate-600">Wir liefern branchenspezifische AI‑Lösungen – mit klaren KPIs und DSGVO‑Konformität.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
        <Card className="transition hover:shadow-xl overflow-hidden">
          <CardContent className="p-6">
            <div className="relative -mx-6 -mt-6 mb-4 h-44">
              <Image src="/images/branchen/kliniken.jpg" alt="Klinik & Gesundheit (Praxisfoto)" fill className="object-cover" style={{ objectPosition: "50% 20%" }} />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-indigo-100 p-2 text-indigo-700"><Stethoscope className="h-5 w-5" /></div>
              <h2 className="text-lg font-semibold">Ärzte &amp; Kliniken</h2>
            </div>
            <ul className="mt-3 text-sm text-slate-700 space-y-2">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Voicebot Arztpraxis (Termin, Anamnese)</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Call‑Deflection &amp; Service‑Entlastung</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> DSGVO, AVV, EU/DE‑Hosting</li>
            </ul>
            <Button className="mt-5 w-full" asChild><a href="/kontakt">Kostenloses Erstgespräch <ArrowRight className="ml-1 h-4 w-4" /></a></Button>
          </CardContent>
        </Card>
        </div>

        <div>
        <Card className="transition hover:shadow-xl overflow-hidden">
          <CardContent className="p-6">
            <div className="relative -mx-6 -mt-6 mb-4 h-44">
              <Image src="/images/branchen/kmu.jpg" alt="KMU & Mittelstand (Praxisfoto)" fill className="object-cover" style={{ objectPosition: "50% 28%" }} />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-indigo-100 p-2 text-indigo-700"><Building2 className="h-5 w-5" /></div>
              <h2 className="text-lg font-semibold">KMU</h2>
            </div>
            <ul className="mt-3 text-sm text-slate-700 space-y-2">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> AI‑Agenten Deutschland: Vertrieb &amp; Support</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> n8n Automatisierung: CRM/ERP/Telefonie</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Pilot in 14 Tagen</li>
            </ul>
            <Button variant="outline" className="mt-5 w-full" asChild><a href="/preise">Use Case berechnen</a></Button>
          </CardContent>
        </Card>
        </div>

        <div>
        <Card className="transition hover:shadow-xl overflow-hidden">
          <CardContent className="p-6">
            <div className="relative -mx-6 -mt-6 mb-4 h-44">
              <Image src="/images/branchen/medtech.jpg" alt="MedTech & Startups (Praxisfoto)" fill className="object-cover" style={{ objectPosition: "50% 28%" }} />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-indigo-100 p-2 text-indigo-700"><Activity className="h-5 w-5" /></div>
              <h2 className="text-lg font-semibold">MedTech &amp; Startups</h2>
            </div>
            <ul className="mt-3 text-sm text-slate-700 space-y-2">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Conversational AI Klinik &amp; RAG‑Wissen</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> API‑First &amp; Skalierung</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Compliance‑Ready</li>
            </ul>
            <Button className="mt-5 w-full" asChild><a href="/kontakt">Pilot anfragen <ArrowRight className="ml-1 h-4 w-4" /></a></Button>
          </CardContent>
        </Card>
        </div>
      </div>

      {/* Sticky CTA-Band */}
      <div className="sticky bottom-4 mt-10">
        <div className="rounded-xl border bg-white/80 backdrop-blur p-4 shadow-lg flex flex-col md:flex-row items-center gap-3 justify-between">
          <div className="text-sm text-slate-700">Bereit für einen branchenspezifischen Pilot? DSGVO‑konform in EU/DE.</div>
          <div className="flex gap-2">
            <Button asChild><a href="/kontakt">Kostenloses Erstgespräch</a></Button>
            <Button variant="outline" asChild><a href="/preise">Use Case berechnen</a></Button>
          </div>
        </div>
      </div>
    </main>
  );
}


