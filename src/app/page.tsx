import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Star, MessageCircle, Mic, Users, Shield, Zap } from "lucide-react";
import EnhancedDemo from "@/components/demo/EnhancedDemo";
import TalkingAvatar from "@/components/voice/TalkingAvatar";
import AIPreviewChat from "@/components/AIPreviewChat";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white pt-48 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Hero Content */}
            <div className="text-left">
              <Badge className="mb-4 bg-black text-white border-black">
                Neu · KI-Agenten
              </Badge>
              <h1 className="text-5xl font-bold text-black mb-6 leading-tight">
                KI-Agenten, die Ihre Teams entlasten –<br />
                <span className="text-black">Vertrieb, Service & Support</span> neu gedacht.
              </h1>
                              <p className="text-xl text-black mb-8">
                  AuroraMedia entwickelt maßgeschneiderte KI-Lösungen, die Ihre Prozesse automatisieren, 
                  Kosten senken und für echte Entlastung sorgen. Design-first. DSGVO-konform. Zukunftssicher.
                </p>
                                   <div className="flex flex-col sm:flex-row gap-4">
                       <div className="flex flex-col items-center">
                         <Link href="/loesungen">
                           <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg">
                             🎯 Jetzt Demo erleben
                           </Button>
                         </Link>
                         {/* AI ACT Logo unter "Jetzt Demo erleben" */}
                         <div className="mt-4">
                           <Image 
                             src="/AI ACt.png" 
                             alt="AI Act" 
                             width={100} 
                             height={30}
                             className="shadow-lg"
                           />
                         </div>
                       </div>
                       
                       <div className="flex flex-col items-center">
                         <Link href="/kontakt">
                           <Button size="lg" variant="outline" className="border-black text-black hover:bg-gray-50 px-8 py-4 text-lg">
                             📞 Kostenloses Audit
                           </Button>
                         </Link>
                         {/* DSGVO Logo unter "Kostenloses Audit" */}
                         <div className="mt-4">
                           <Image 
                             src="/images/DSGVO.jpg" 
                             alt="DSGVO-konform" 
                             width={100} 
                             height={30}
                             className="shadow-lg"
                           />
                         </div>
                       </div>
                     </div>
            </div>

                          {/* Right Side - Live AI Preview */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-black mb-2">Live AI-Preview</h3>
                  <p className="text-black text-sm">Interaktiv</p>
                </div>
                
                <AIPreviewChat />
              </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Unsere Kernleistungen</h2>
            <p className="text-xl text-black">Professionelle KI-Lösungen für Ihr Unternehmen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <Badge className="mb-4 bg-black text-white">KI-Ready</Badge>
                <h3 className="text-2xl font-semibold text-black mb-4">Sprach- und Textagenten</h3>
                <p className="text-black mb-6">
                  Intelligente Konversations-KI für Kundenbetreuung und Support
                </p>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-black" />
                </div>
                <Badge className="mb-4 bg-black text-white">EU-konform</Badge>
                <h3 className="text-2xl font-semibold text-black mb-4">DSGVO-konform</h3>
                <p className="text-black mb-6">
                  100% rechtssichere Datenverarbeitung nach EU-Standards
                </p>
                <div className="flex justify-center gap-4 items-center">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <Badge className="mb-4 bg-black text-white">Enterprise Ready</Badge>
                <h3 className="text-2xl font-semibold text-black mb-4">n8n Ready</h3>
                <p className="text-black mb-6">
                  Professionelle Workflow-Automatisierung für Ihr Unternehmen
                </p>
                <div className="flex justify-center">
                  <Image 
                    src="/images/n8n.png" 
                    alt="n8n - Workflow Automation Platform" 
                    width={120} 
                    height={40}
                    className="shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why AuroraMedia Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Warum AuroraMedia?</h2>
            <p className="text-xl text-black">Konkrete Ergebnisse für Ihr Unternehmen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">80%</div>
              <p className="text-black">Zeitersparnis bei Routineaufgaben</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">60%</div>
              <p className="text-black">Kostenreduktion im Support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">24/7</div>
              <p className="text-black">Verfügbarkeit Ihrer KI-Agenten</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">100%</div>
              <p className="text-black">DSGVO-konform & EU-konform</p>
            </div>
          </div>
          </div>
        </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Ihre Branche, unsere Expertise</h2>
            <p className="text-xl text-black">Maßgeschneiderte Lösungen für verschiedene Branchen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-6">
                <Image 
                  src="/images/branchen/kliniken.jpg" 
                  alt="Medizin - KI-Agenten für Patientenbetreuung, Terminverwaltung & Support" 
                  width={300} 
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-black mb-2">Medizin</h3>
                <p className="text-black text-sm">
                  KI-Agenten für Patientenbetreuung, Terminverwaltung & Support
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-6">
                <Image 
                  src="/images/branchen/kmu.jpg" 
                  alt="KMU - Automatisierung von Vertrieb, Buchhaltung & Kundenservice" 
                  width={300} 
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-black mb-2">KMU</h3>
                <p className="text-black text-sm">
                  Automatisierung von Vertrieb, Buchhaltung & Kundenservice
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-6">
                <Image 
                  src="/images/branchen/medtech.jpg" 
                  alt="E-Commerce - 24/7 Kundenbetreuung, Bestellabwicklung & Support" 
                  width={300} 
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-black mb-2">E-Commerce</h3>
                <p className="text-black text-sm">
                  24/7 Kundenbetreuung, Bestellabwicklung & Support
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-6">
                <Image 
                  src="/images/Baustelle trifft Handwerkskunst.png" 
                  alt="Baugewerbe & Handwerk - KI-gestützte Projektplanung, Materialverwaltung & Kundenservice für Handwerksbetriebe" 
                  width={300} 
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-black mb-2">Baugewerbe & Handwerk</h3>
                <p className="text-black text-sm">
                  KI-gestützte Projektplanung, Materialverwaltung & Kundenservice für Handwerksbetriebe
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Was unsere Kunden sagen</h2>
            <p className="text-xl text-black">Erfolgsgeschichten aus der Praxis</p>
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
                    <h4 className="text-lg font-semibold text-black">Dr. Sarah Schmitz</h4>
                    <p className="text-black">Chefärztin, Klinik Düsseldorf</p>
                  </div>
                </div>
                <blockquote className="text-black mb-4 italic">
                  "AuroraMedia hat unseren Support komplett revolutioniert. 80% weniger Wartezeiten für Patienten und unser Personal kann sich auf die wirklich wichtigen Aufgaben konzentrieren."
                </blockquote>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-black fill-current mr-1" />
                  <span className="text-sm font-semibold text-black">80% weniger Wartezeiten</span>
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
                    <h4 className="text-lg font-semibold text-black">Shawn Gajsinghe</h4>
                    <p className="text-black">CEO, Crover SE Berlin</p>
                  </div>
                </div>
                <blockquote className="text-black mb-4 italic">
                  "Die KI-Agenten haben unseren Vertrieb um 60% effizienter gemacht. Unsere Sales-Teams können sich jetzt auf die qualifizierten Leads konzentrieren."
                </blockquote>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-black fill-current mr-1" />
                  <span className="text-sm font-semibold text-black">60% effizienter</span>
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
                    <h4 className="text-lg font-semibold text-black">Leyla Azadi</h4>
                    <p className="text-black">Product Owner, Supreme Holdings</p>
                  </div>
                </div>
                <blockquote className="text-black mb-4 italic">
                  "24/7 Kundenbetreuung ohne zusätzliches Personal. Das war genau das, was wir brauchten. Unsere Conversion-Rate ist um 35% gestiegen."
                </blockquote>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-black fill-current mr-1" />
                  <span className="text-sm font-semibold text-black">35% mehr Conversion</span>
                </div>
              </CardContent>
            </Card>
          </div>
          </div>
        </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Häufige Fragen</h2>
            <p className="text-xl text-black">Alles was Sie über unsere KI-Lösungen wissen müssen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Wie schnell können wir starten?
                </h3>
                <p className="text-black text-sm">
                  Wir starten bereits nach 2 Wochen mit der ersten Phase. Die komplette Implementierung dauert je nach Umfang 4-8 Wochen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Sind Ihre Lösungen DSGVO-konform?
                </h3>
                <p className="text-black text-sm">
                  Ja, 100%. Wir hosten ausschließlich in der EU, haben alle notwendigen Verträge und implementieren Privacy by Design.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Welche Branchen unterstützen Sie?
                </h3>
                <p className="text-black text-sm">
                  Wir haben bereits erfolgreiche Projekte in Medizin, KMU, E-Commerce und Support umgesetzt. Jede Branche ist willkommen!
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Welche Technologien nutzen Sie?
                </h3>
                <p className="text-black text-sm">
                  Wir arbeiten mit modernsten KI-Modellen (GPT-4, Claude), n8n für Workflow-Automation, und entwickeln maßgeschneiderte RAG-Systeme für Ihr spezifisches Wissen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Können wir bestehende Systeme integrieren?
                </h3>
                <p className="text-black text-sm">
                  Ja, wir integrieren nahtlos in Ihre bestehenden CRM-, ERP- und Kommunikationssysteme. n8n ermöglicht flexible Verbindungen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Wie funktioniert der Support?
                </h3>
                <p className="text-black text-sm">
                  Wir bieten 24/7 Support für alle unsere Lösungen. Unser Team ist immer erreichbar und kümmert sich um alle technischen Fragen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Können wir die KI trainieren?
                </h3>
                <p className="text-black text-sm">
                  Ja, wir trainieren die KI mit Ihren spezifischen Daten und Prozessen. So wird sie zu einem echten Experten für Ihr Unternehmen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Wie messen wir den Erfolg?
                </h3>
                <p className="text-black text-sm">
                  Wir implementieren detaillierte Analytics und ROI-Tracking. Sie sehen genau, wie viel Zeit und Kosten Sie sparen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Gibt es eine Testphase?
                </h3>
                <p className="text-black text-sm">
                  Ja, wir bieten eine kostenlose Testphase von 2 Wochen. So können Sie die KI-Lösung in Ihrem Umfeld erproben.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Bleiben Sie auf dem Laufenden</h2>
          <p className="text-xl text-gray-300 mb-8">
            Erhalten Sie exklusive Einblicke in die neuesten KI-Trends und Automatisierungsmöglichkeiten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ihre E-Mail-Adresse" 
              className="flex-1 px-4 py-3 rounded-lg border-0 text-black"
            />
            <Button className="bg-white text-black hover:bg-gray-200 px-8">
              Newsletter abonnieren
            </Button>
          </div>
          <p className="text-gray-300 text-sm mt-4">
            DSGVO-konform • Jederzeit kündbar • Keine Spam
          </p>
        </div>
      </section>
      </main>
  );
}
