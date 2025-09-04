import dynamic from "next/dynamic";
import Image from "next/image";
const TeamSection = dynamic(() => import("@/components/team/TeamSection"));
export const metadata = {
  title: "Über uns | AuroraMedia.io",
  description: "Mission, Vision und Team von AuroraMedia.io",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-black mb-6">Über uns</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Mission, Vision und Team von AuroraMedia.io - KI-Agenten aus Düsseldorf
          </p>
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/auroramedia-logo-black.png"
              alt="AuroraMedia Team"
              width={400}
              height={400}
              className="mx-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
      <section className="mt-6 space-y-4 text-slate-700">
        <p>
          Unsere digitale Marketingagentur hat sich das Ziel gesetzt, Künstliche Intelligenz und Automatisierung in die Arbeitswelt zu implementieren, um einen positiven Einfluss zu schaffen. Wir glauben, dass die Integration modernster Technologien nicht nur die Effizienz steigern, sondern auch die Kreativität und Innovationskraft in Unternehmen fördern kann. Durch maßgeschneiderte Lösungen helfen wir unseren Kunden, ihre Prozesse zu optimieren und ihre Zielgruppen effektiver zu erreichen. Unser Ansatz basiert auf einem tiefen Verständnis der individuellen Bedürfnisse jedes Unternehmens, sodass wir Strategien entwickeln, die sowohl nachhaltige Ergebnisse liefern als auch das Wachstum fördern. Gemeinsam gestalten wir die Zukunft der Arbeitswelt und setzen neue Maßstäbe im digitalen Marketing.
        </p>
      </section>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold">Mission</h2>
          <p className="mt-3 text-slate-700">
            Unsere Mission ist es, Unternehmen durch die Integration von Künstlicher Intelligenz und Automatisierungstechnologien zu befähigen, ihre Arbeitsprozesse effizienter, kreativer und zukunftsorientiert zu gestalten. Wir entwickeln maßgeschneiderte Lösungen, die nicht nur die Produktivität steigern, sondern auch Innovationen fördern und nachhaltige Wachstumschancen schaffen. Unser Ziel ist es, die Arbeitswelt positiv zu verändern, indem wir moderne Technologien zugänglich und nutzbar machen.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Vision</h2>
          <p className="mt-3 text-slate-700">
            Wir streben eine Zukunft an, in der KI und Automatisierung selbstverständliche Werkzeuge sind, um Unternehmen und Menschen zu entlasten, ihre Potenziale zu entfalten und neue Möglichkeiten zu schaffen. Als Pioniere im digitalen Marketing setzen wir Maßstäbe für intelligente, effiziente und kreative Lösungen, die nicht nur den Erfolg unserer Kunden sichern, sondern auch die Art und Weise, wie wir arbeiten, nachhaltig verbessern. Gemeinsam gestalten wir eine Arbeitswelt, die Innovation, Effizienz und Menschlichkeit vereint.
          </p>
        </div>
      </section>

          <TeamSection />
        </div>
      </section>
    </main>
  );
}


