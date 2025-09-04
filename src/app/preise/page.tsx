export const metadata = {
  title: "Preise | AuroraMedia.io",
  description: "Transparente Preise für KI-Automatisierung: Aurora Start, Aurora Scale und Aurora Enterprise.",
};

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, X, Star, Zap, Shield, Users, ArrowRight } from "lucide-react";

type PlanKey = "start" | "scale" | "enterprise";

const PLANS: Record<PlanKey, { 
  name: string; 
  price: string; 
  cta: string; 
  featured?: boolean; 
  bullets: string[];
  icon: React.ComponentType<any>;
  description: string;
  color: string;
}> = {
  start: {
    name: "Aurora Start",
    price: "199 €",
    cta: "Jetzt starten",
    featured: false,
    bullets: [
      "1–2 Automatisierungen",
      "WhatsApp oder E-Mail",
      "Standard-Bot",
      "EU-Cloud Hosting",
      "E-Mail Support",
    ],
    icon: Zap,
    description: "Perfekt für den Einstieg",
    color: "from-gray-100 to-gray-200",
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
    icon: Star,
    description: "Ideal für wachsende Unternehmen",
    color: "from-black to-gray-800",
  },
  enterprise: {
    name: "Aurora Enterprise",
    price: "Preis auf Anfrage",
    cta: "Preis anfragen",
    featured: false,
    bullets: [
      "Unbegrenzte Workflows",
      "Omnichannel inkl. Social & Voice",
      "Individuelles LLM (OpenAI, lokal, Azure)",
      "DE/EU-Hosting mit Datenisolierung",
      "24/7 Support mit Account Manager",
    ],
    icon: Users,
    description: "Für große Unternehmen",
    color: "from-gray-800 to-black",
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
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-black mb-6">Transparente Preise</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Wählen Sie das perfekte Paket für Ihr Unternehmen. Alle Preise sind transparent und ohne versteckte Kosten.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {(["start", "scale", "enterprise"] as PlanKey[]).map((key) => {
              const plan = PLANS[key];
              const IconComponent = plan.icon;
              return (
                <Card 
                  key={key} 
                  className={`relative border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 group ${
                    plan.featured 
                      ? 'border-black shadow-2xl scale-105' 
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-black text-white px-6 py-2 text-sm font-semibold">
                        ⭐ Meistgewählt
                      </Badge>
                    </div>
                  )}
                  
                  <CardContent className="p-8">
                    {/* Icon and Header */}
                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-black mb-2">{plan.name}</h2>
                      <p className="text-gray-600 text-sm">{plan.description}</p>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-8">
                      <div className="text-5xl font-bold text-black mb-2">{plan.price}</div>
                      {key !== 'enterprise' && (
                        <p className="text-gray-500 text-sm">pro Monat</p>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {plan.bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-black text-sm">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button 
                      className={`w-full py-4 text-lg font-semibold transition-all duration-300 group-hover:scale-105 ${
                        plan.featured 
                          ? 'bg-black text-white hover:bg-gray-800' 
                          : 'bg-white text-black border-2 border-black hover:bg-black hover:text-white'
                      }`} 
                      asChild
                    >
                      <Link href={`/kontakt?plan=${key}`} className="flex items-center justify-center gap-2">
                        {plan.cta}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Detaillierter Vergleich</h2>
            <p className="text-xl text-gray-600">Alle Features im direkten Vergleich</p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[800px] bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-4 bg-black text-white">
                <div className="p-6 font-bold text-lg">Leistung</div>
                <div className="p-6 text-center font-semibold">Aurora Start</div>
                <div className="p-6 text-center font-semibold bg-gray-800">Aurora Scale</div>
                <div className="p-6 text-center font-semibold">Aurora Enterprise</div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-gray-200">
                {MATRIX.map((row, index) => (
                  <div key={row.label} className={`grid grid-cols-4 p-6 text-sm transition-colors duration-200 hover:bg-gray-50 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-25'
                  }`}>
                    <div className="font-semibold text-black flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-gray-600" />
                      {row.label}
                    </div>
                    <div className="text-center flex items-center justify-center">
                      {typeof row.start === "boolean" ? (
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          row.start ? 'bg-black' : 'bg-gray-200'
                        }`}>
                          {row.start ? <Check className="h-4 w-4 text-white" /> : <X className="h-4 w-4 text-gray-400" />}
                        </div>
                      ) : (
                        <span className="text-black font-medium">{row.start}</span>
                      )}
                    </div>
                    <div className="text-center flex items-center justify-center bg-gray-25">
                      {typeof row.scale === "boolean" ? (
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          row.scale ? 'bg-black' : 'bg-gray-200'
                        }`}>
                          {row.scale ? <Check className="h-4 w-4 text-white" /> : <X className="h-4 w-4 text-gray-400" />}
                        </div>
                      ) : (
                        <span className="text-black font-medium">{row.scale}</span>
                      )}
                    </div>
                    <div className="text-center flex items-center justify-center">
                      {typeof row.enterprise === "boolean" ? (
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          row.enterprise ? 'bg-black' : 'bg-gray-200'
                        }`}>
                          {row.enterprise ? <Check className="h-4 w-4 text-white" /> : <X className="h-4 w-4 text-gray-400" />}
                        </div>
                      ) : (
                        <span className="text-black font-medium">{row.enterprise}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Noch Fragen zu den Preisen?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Kontaktieren Sie uns für eine individuelle Beratung und ein maßgeschneidertes Angebot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg">
                Kostenloses Beratungsgespräch
              </Button>
            </Link>
            <Link href="/loesungen">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
                Lösungen ansehen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


