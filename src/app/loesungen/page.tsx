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
            
              {/* Key Benefits Visual */}
              <div className="text-center mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-2xl p-6 border-2 border-black shadow-lg">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">24/7</h3>
                    <p className="text-gray-600 text-sm">Immer erreichbar</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 border-2 border-black shadow-lg">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">Sofort</h3>
                    <p className="text-gray-600 text-sm">Keine Wartezeiten</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 border-2 border-black shadow-lg">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">Automatisch</h3>
                    <p className="text-gray-600 text-sm">KI-gesteuert</p>
                  </div>
                </div>
              </div>

              {/* AI Agents vs Chatbots Visual Comparison */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* AI Agents */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-black shadow-xl">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2">AI-Agenten</h3>
                    <p className="text-gray-600">Ihre digitalen Spezialisten</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                      <span className="text-black font-medium">Prozess-Automatisierung</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                      <span className="text-black font-medium">Datenanalyse & Reporting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                      <span className="text-black font-medium">CRM-Integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                      <span className="text-black font-medium">Workflow-Optimierung</span>
                    </div>
                  </div>
                </div>
                
                {/* Chatbots */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-black shadow-xl">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2">Chatbots</h3>
                    <p className="text-gray-600">Neue Generation Kundenservice</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                      <span className="text-black font-medium">WhatsApp Integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                      <span className="text-black font-medium">Website Chat</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                      <span className="text-black font-medium">Social Media</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                      <span className="text-black font-medium">Mehrsprachig</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Visual Grid */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-black mb-8">Ihre Vorteile auf einen Blick</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 border-2 border-black shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-black mb-2">24/7 Service</h4>
                  <p className="text-gray-600 text-sm">Ohne Wartezeiten</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 border-2 border-black shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-black mb-2">Kosten senken</h4>
                  <p className="text-gray-600 text-sm">Weniger Aufwand</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 border-2 border-black shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-black mb-2">Mehr Umsatz</h4>
                  <p className="text-gray-600 text-sm">Smarte Leads</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 border-2 border-black shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-black mb-2">DSGVO-konform</h4>
                  <p className="text-gray-600 text-sm">Sicher & geschützt</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 border-2 border-black shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-black mb-2">Skalierbar</h4>
                  <p className="text-gray-600 text-sm">Wächst mit Ihnen</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 border-2 border-black shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-black mb-2">Sofort starten</h4>
                  <p className="text-gray-600 text-sm">Pilot in 14 Tagen</p>
                </div>
              </div>

              {/* Mission Statement Visual */}
              <div className="bg-gradient-to-r from-black to-gray-800 rounded-3xl p-12 text-center shadow-2xl">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Unsere Mission</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="font-semibold">Kunden begeistern</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="font-semibold">Team entlasten</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <p className="font-semibold">Geschäft voranbringen</p>
                  </div>
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