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
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge className="mb-4 bg-black text-white">🚀 Pilot in 14 Tagen</Badge>
          <h1 className="text-5xl font-bold text-black mb-6">Unsere KI-Lösungen</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conversational AI, Voicebots, RAG‑Wissenssuche und CRM‑Integrationen – Ende‑zu‑Ende umgesetzt.
          </p>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: "AI‑Agenten & Voicebots",
              desc: "Webchat, WhatsApp, Telefon – 24/7, mehrsprachig, DSGVO.",
              icon: <MessageSquareMore className="h-8 w-8" />,
              color: "bg-gradient-to-br from-gray-100 to-gray-200"
            },{
              title: "n8n & Integrationen",
              desc: "Trigger, Webhooks, CRM/ERP & Telefonie – durchgängige Flows.",
              icon: <Workflow className="h-8 w-8" />,
              color: "bg-gradient-to-br from-gray-100 to-gray-200"
            },{
              title: "Content & Channel Growth",
              desc: "YouTube & Social automatisiert – ohne Qualitätsverlust.",
              icon: <Film className="h-8 w-8" />,
              color: "bg-gradient-to-br from-gray-100 to-gray-200"
            }].map((s, idx) => (
              <div key={s.title} className="group">
                <Card className="transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-black">
                        {s.icon}
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-center mb-4 text-black">{s.title}</h2>
                    <p className="text-gray-600 text-center">{s.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detaillierter AI-Agenten & Voicebots Bereich */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl border border-gray-200 p-12 shadow-xl">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquareMore className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-4 text-black">Intelligente AI-Agenten & Chatbots</h2>
                <p className="text-xl text-gray-600">Ihr Wettbewerbsvorteil in der digitalen Transformation</p>
              </div>
            
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Stellen Sie sich vor, Ihr Unternehmen ist <strong>24/7 erreichbar</strong>, jede Kundenanfrage wird <strong>sofort beantwortet</strong>, und Ihr Team kann sich endlich auf die wirklich wichtigen Aufgaben konzentrieren. Genau das machen unsere <strong>AI-Agenten und Chatbots</strong> möglich.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="text-xl font-semibold mb-3 text-black">AI-Agenten – Ihre digitalen Spezialisten</h3>
                    <p className="text-gray-700">
                      Unsere AI-Agenten sind mehr als nur Assistenten. Sie übernehmen wiederkehrende Aufgaben, automatisieren komplexe Prozesse und steigern Ihre Effizienz – ganz ohne zusätzlichen Personalaufwand.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="text-xl font-semibold mb-3 text-black">Chatbots – die neue Generation Kundenservice</h3>
                    <p className="text-gray-700">
                      Moderne Chatbots sind keine simplen FAQ-Programme mehr. Sie kommunizieren empathisch, individuell und in Echtzeit über <strong>WhatsApp, Ihre Website oder Social Media</strong>. So erhalten Ihre Kunden nicht nur schnelle Antworten, sondern ein echtes Erlebnis.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-black">Ihre Vorteile auf einen Blick</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="h-6 w-6 text-black flex-shrink-0" />
                    <span className="text-gray-700"><strong>24/7 Kundenservice</strong> – ohne Wartezeiten</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <TrendingUp className="h-6 w-6 text-black flex-shrink-0" />
                    <span className="text-gray-700"><strong>Kosten senken</strong> – weniger Aufwand für Routineaufgaben</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <Users className="h-6 w-6 text-black flex-shrink-0" />
                    <span className="text-gray-700"><strong>Mehr Umsatz</strong> – durch smarte Lead-Qualifizierung & Terminbuchung</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <Shield className="h-6 w-6 text-black flex-shrink-0" />
                    <span className="text-gray-700"><strong>DSGVO-konform & sicher</strong> – Ihre Daten bleiben geschützt</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 md:col-span-2">
                    <ArrowRight className="h-6 w-6 text-black flex-shrink-0" />
                    <span className="text-gray-700"><strong>Skalierbar</strong> – wächst mit Ihrem Unternehmen</span>
                  </div>
                </div>

                <div className="bg-black rounded-2xl p-8 border border-gray-200 text-center">
                  <p className="text-xl text-white font-medium">
                    <strong>Unsere Mission:</strong> Wir entwickeln Lösungen, die <strong>Ihre Kunden begeistern, Ihr Team entlasten und Ihr Geschäft nach vorne bringen</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live KI-Agent Builder Section */}
      <section id="ai-demo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 p-12 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-black">Live KI-Agent Builder</h2>
              <p className="text-gray-600 text-xl mb-6">Erleben Sie Ihre maßgeschneiderte KI-Lösung in 3 einfachen Schritten</p>
              <Badge className="bg-black text-white px-4 py-2">🎯 Branchen-spezifisch • 🚀 Live-Demo • 💰 ROI-Kalkulator</Badge>
            </div>
            <EnhancedDemo />
          </div>
        </div>
      </section>
    </main>
  );
}