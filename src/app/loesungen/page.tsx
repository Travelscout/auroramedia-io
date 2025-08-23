export const metadata = {
  title: "Lösungen | AuroraMedia",
  description: "Conversational AI, Voicebots, RAG und CRM-Integrationen.",
};

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Workflow, MessageSquareMore, Film, CheckCircle, Shield, TrendingUp, Users } from "lucide-react";
import EnhancedDemo from "@/components/demo/EnhancedDemo";

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold">Lösungen</h1>
        <Badge>Pilot in 14 Tagen</Badge>
      </div>
      <p className="mt-3 text-slate-600">Conversational AI, Voicebots, RAG‑Wissenssuche und CRM‑Integrationen – Ende‑zu‑Ende umgesetzt.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[{
          title: "AI‑Agenten & Voicebots",
          desc: "Webchat, WhatsApp, Telefon – 24/7, mehrsprachig, DSGVO.",
          href: "/service/ai-agenten"
        },{
          title: "n8n & Integrationen",
          desc: "Trigger, Webhooks, CRM/ERP & Telefonie – durchgängige Flows.",
          href: "/service/workflows"
        },{
          title: "Content & Channel Growth",
          desc: "YouTube & Social automatisiert – ohne Qualitätsverlust.",
          href: "/service/content"
        }].map((s, idx) => (
          <div key={s.title}>
            <Card className="transition hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-indigo-100 p-2 text-indigo-700">
                    {idx===0? <MessageSquareMore className="h-5 w-5" /> : idx===1? <Workflow className="h-5 w-5" /> : <Film className="h-5 w-5" />}
                  </div>
                  <h2 className="text-lg font-semibold">{s.title}</h2>
                </div>
                <p className="mt-2 text-sm text-slate-700">{s.desc}</p>
                <Button className="mt-5" asChild>
                  <a href={s.href}>Details <ArrowRight className="ml-1 h-4 w-4" /></a>
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Detaillierter AI-Agenten & Voicebots Bereich */}
      <div className="mt-16">
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-200 p-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-xl bg-indigo-100 p-3 text-indigo-700">
                <MessageSquareMore className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">Intelligente AI-Agenten & Chatbots – Ihr Wettbewerbsvorteil</h2>
            </div>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Stellen Sie sich vor, Ihr Unternehmen ist <strong>24/7 erreichbar</strong>, jede Kundenanfrage wird <strong>sofort beantwortet</strong>, und Ihr Team kann sich endlich auf die wirklich wichtigen Aufgaben konzentrieren. Genau das machen unsere <strong>AI-Agenten und Chatbots</strong> möglich.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-2xl p-6 border border-slate-200">
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">AI-Agenten – Ihre digitalen Spezialisten</h3>
                  <p className="text-slate-700">
                    Unsere AI-Agenten sind mehr als nur Assistenten. Sie übernehmen wiederkehrende Aufgaben, automatisieren komplexe Prozesse und steigern Ihre Effizienz – ganz ohne zusätzlichen Personalaufwand.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 border border-slate-200">
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">Chatbots – die neue Generation Kundenservice</h3>
                  <p className="text-slate-700">
                    Moderne Chatbots sind keine simplen FAQ-Programme mehr. Sie kommunizieren empathisch, individuell und in Echtzeit über <strong>WhatsApp, Ihre Website oder Social Media</strong>. So erhalten Ihre Kunden nicht nur schnelle Antworten, sondern ein echtes Erlebnis.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-slate-900">Ihre Vorteile auf einen Blick</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700"><strong>24/7 Kundenservice</strong> – ohne Wartezeiten</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Kosten senken</strong> – weniger Aufwand für Routineaufgaben</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Mehr Umsatz</strong> – durch smarte Lead-Qualifizierung & Terminbuchung</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700"><strong>DSGVO-konform & sicher</strong> – Ihre Daten bleiben geschützt</span>
                </div>
                <div className="flex items-center gap-3 md:col-span-2">
                  <ArrowRight className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Skalierbar</strong> – wächst mit Ihrem Unternehmen</span>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200">
                <p className="text-lg text-slate-800 font-medium">
                  <strong>Unsere Mission:</strong> Wir entwickeln Lösungen, die <strong>Ihre Kunden begeistern, Ihr Team entlasten und Ihr Geschäft nach vorne bringen</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live KI-Agent Builder Section */}
      <div className="mt-16">
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-200 p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Live KI-Agent Builder</h2>
            <p className="text-slate-600 text-lg">Erleben Sie Ihre maßgeschneiderte KI-Lösung in 3 einfachen Schritten</p>
            <Badge className="mt-4" variant="outline">🎯 Branchen-spezifisch • 🚀 Live-Demo • 💰 ROI-Kalkulator</Badge>
          </div>
          <EnhancedDemo />
        </div>
      </div>
    </main>
  );
}


