import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Star, MessageCircle, Mic, Users, Shield, Zap } from "lucide-react";
import EnhancedDemo from "@/components/demo/EnhancedDemo";
import TalkingAvatar from "@/components/voice/TalkingAvatar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-black text-white border-black">
              Neu · KI-Agenten
            </Badge>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              KI-Agenten, die Ihre Teams entlasten –<br />
              <span className="text-black">Vertrieb, Service & Support</span> neu gedacht.
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              AuroraMedia entwickelt maßgeschneiderte KI-Lösungen, die Ihre Prozesse automatisieren, 
              Kosten senken und für echte Entlastung sorgen. Design-first. DSGVO-konform. Zukunftssicher.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/loesungen">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg">
                  🎯 Jetzt Demo erleben
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button size="lg" variant="outline" className="border-black text-black hover:bg-gray-50 px-8 py-4 text-lg">
                  📞 Kostenloses Audit
                </Button>
              </Link>
            </div>
          </div>

          {/* AI Demo Section */}
          <div id="ai-demo" className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Live AI-Preview</h3>
              <p className="text-slate-600">Interaktiv 💬 Stellen Sie eine Frage über KI-Agenten...</p>
            </div>
            <div className="text-center py-12">
              <h4 className="text-xl font-semibold text-slate-900 mb-4">KI-Agent Demo</h4>
              <p className="text-slate-600 mb-6">Erleben Sie unsere KI-Agenten in Aktion</p>
              <Link href="/loesungen#ai-demo">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg">
                  🚀 Live Demo starten
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex justify-center">
              <TalkingAvatar />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Unsere Kernleistungen</h2>
            <p className="text-xl text-slate-600">Professionelle KI-Lösungen für Ihr Unternehmen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Image 
                    src="/images/auroramedia-logo-black.png" 
                    alt="AuroraMedia Agenten" 
                    width={48} 
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <Badge className="mb-4 bg-black text-white">KI-Ready</Badge>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Sprach- und Textagenten</h3>
                <p className="text-slate-600 mb-6">
                  Intelligente Konversations-KI für Kundenbetreuung und Support
                </p>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <Badge className="mb-4 bg-black text-white">EU-konform</Badge>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">DSGVO-konform</h3>
                <p className="text-slate-600 mb-6">
                  100% rechtssichere Datenverarbeitung nach EU-Standards
                </p>
                <Image 
                  src="/images/dsgvo-konform.png" 
                  alt="DSGVO-konform Badge" 
                  width={120} 
                  height={40}
                  className="mx-auto"
                />
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <Badge className="mb-4 bg-black text-white">Enterprise Ready</Badge>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">n8n Ready</h3>
                <p className="text-slate-600 mb-6">
                  Professionelle Workflow-Automatisierung für Ihr Unternehmen
                </p>
                <Image 
                  src="/images/n8n.png" 
                  alt="n8n - Workflow Automation Platform" 
                  width={120} 
                  height={40}
                  className="mx-auto"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why AuroraMedia Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Warum AuroraMedia?</h2>
            <p className="text-xl text-slate-600">Konkrete Ergebnisse für Ihr Unternehmen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">80%</div>
              <p className="text-slate-600">Zeitersparnis bei Routineaufgaben</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">60%</div>
              <p className="text-slate-600">Kostenreduktion im Support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">24/7</div>
              <p className="text-slate-600">Verfügbarkeit Ihrer KI-Agenten</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">100%</div>
              <p className="text-slate-600">DSGVO-konform & EU-konform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Ihre Branche, unsere Expertise</h2>
            <p className="text-xl text-slate-600">Maßgeschneiderte Lösungen für verschiedene Branchen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Image 
                  src="/images/branchen/kliniken.jpg" 
                  alt="Medizin - KI-Agenten für Patientenbetreuung, Terminverwaltung & Support" 
                  width={300} 
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Medizin</h3>
                <p className="text-slate-600 text-sm">
                  KI-Agenten für Patientenbetreuung, Terminverwaltung & Support
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Image 
                  src="/images/branchen/kmu.jpg" 
                  alt="KMU - Automatisierung von Vertrieb, Buchhaltung & Kundenservice" 
                  width={300} 
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">KMU</h3>
                <p className="text-slate-600 text-sm">
                  Automatisierung von Vertrieb, Buchhaltung & Kundenservice
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Image 
                  src="/images/branchen/medtech.jpg" 
                  alt="E-Commerce - 24/7 Kundenbetreuung, Bestellabwicklung & Support" 
                  width={300} 
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">E-Commerce</h3>
                <p className="text-slate-600 text-sm">
                  24/7 Kundenbetreuung, Bestellabwicklung & Support
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Image 
                  src="/images/Baustelle trifft Handwerkskunst.png" 
                  alt="Baugewerbe & Handwerk - KI-gestützte Projektplanung, Materialverwaltung & Kundenservice für Handwerksbetriebe" 
                  width={300} 
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Baugewerbe & Handwerk</h3>
                <p className="text-slate-600 text-sm">
                  KI-gestützte Projektplanung, Materialverwaltung & Kundenservice für Handwerksbetriebe
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Was unsere Kunden sagen</h2>
            <p className="text-xl text-slate-600">Erfolgsgeschichten aus der Praxis</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Image 
                    src="/images/sarah-schmitz.png" 
                    alt="Dr. Sarah Schmitz - Chefärztin, Klinik Düsseldorf" 
                    width={60} 
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Dr. Sarah Schmitz</h4>
                    <p className="text-slate-600">Chefärztin, Klinik Düsseldorf</p>
                  </div>
                </div>
                <blockquote className="text-slate-700 mb-4 italic">
                  "AuroraMedia hat unseren Support komplett revolutioniert. 80% weniger Wartezeiten für Patienten und unser Personal kann sich auf die wirklich wichtigen Aufgaben konzentrieren."
                </blockquote>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-semibold text-slate-900">80% weniger Wartezeiten</span>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Image 
                    src="/images/Shawn GAJASINGHE.png" 
                    alt="Shawn Gajsinghe - CEO, Crover SE Berlin" 
                    width={60} 
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Shawn Gajsinghe</h4>
                    <p className="text-slate-600">CEO, Crover SE Berlin</p>
                  </div>
                </div>
                <blockquote className="text-slate-700 mb-4 italic">
                  "Die KI-Agenten haben unseren Vertrieb um 60% effizienter gemacht. Unsere Sales-Teams können sich jetzt auf die qualifizierten Leads konzentrieren."
                </blockquote>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-semibold text-slate-900">60% effizienter</span>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Image 
                    src="/images/Leylaazadisocialproof.png" 
                    alt="Leyla Azadi - Product Owner, Supreme Holdings" 
                    width={60} 
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Leyla Azadi</h4>
                    <p className="text-slate-600">Product Owner, Supreme Holdings</p>
                  </div>
                </div>
                <blockquote className="text-slate-700 mb-4 italic">
                  "24/7 Kundenbetreuung ohne zusätzliches Personal. Das war genau das, was wir brauchten. Unsere Conversion-Rate ist um 35% gestiegen."
                </blockquote>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-semibold text-slate-900">35% mehr Conversion</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Häufige Fragen</h2>
            <p className="text-xl text-slate-600">Alles was Sie über unsere KI-Lösungen wissen müssen</p>
          </div>

          <div className="space-y-4">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Wie schnell können wir mit der KI-Implementierung starten?
                </h3>
                <p className="text-slate-600">
                  Wir starten bereits nach 2 Wochen mit der ersten Phase. Die komplette Implementierung dauert je nach Umfang 4-8 Wochen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Sind Ihre Lösungen wirklich DSGVO-konform?
                </h3>
                <p className="text-slate-600">
                  Ja, 100%. Wir hosten ausschließlich in der EU, haben alle notwendigen Verträge und implementieren Privacy by Design.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Welche Branchen unterstützen Sie?
                </h3>
                <p className="text-slate-600">
                  Wir haben bereits erfolgreiche Projekte in Medizin, KMU, E-Commerce und Support umgesetzt. Jede Branche ist willkommen!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Bleiben Sie auf dem Laufenden</h2>
          <p className="text-xl text-blue-100 mb-8">
            Erhalten Sie exklusive Einblicke in die neuesten KI-Trends und Automatisierungsmöglichkeiten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ihre E-Mail-Adresse" 
              className="flex-1 px-4 py-3 rounded-lg border-0 text-slate-900"
            />
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8">
              Newsletter abonnieren
            </Button>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            DSGVO-konform • Jederzeit kündbar • Keine Spam
          </p>
        </div>
      </section>
    </main>
  );
}
