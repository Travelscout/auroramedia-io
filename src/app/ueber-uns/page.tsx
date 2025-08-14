export const metadata = {
  title: "Über uns | AuroraMedia.io",
  description: "Mission, Vision und Team von AuroraMedia.io",
};

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Über uns</h1>
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

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Team</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="space-y-2 text-slate-700">
            <h3 className="font-semibold">Harry</h3>
            <p>
              Harry ist der Mann für die Verbindung von Präzision und Kreativität. Als ehemaliger Banker und IT-Entwickler bringt er nicht nur technologisches Know-how mit, sondern auch eine analytische Denkweise, die komplexe Projekte strukturiert. Doch Harrys Herz schlägt auch über den Wolken: Als leidenschaftlicher Pilot und offizieller Prüfer für den DAEC (Deutscher Aeroclub) vereint er die Disziplin der Luftfahrt mit der Agilität der Medienwelt. Für ihn ist jedes Projekt wie ein Flug – geplant, aber immer bereit für überraschende Horizonte.
            </p>
          </article>
          <article className="space-y-2 text-slate-700">
            <h3 className="font-semibold">Mehdi</h3>
            <p>
              Mehdi ist der strategische Tausendsassa: Nach Stationen in der Touristik, einem BWL-Studium und prägenden Jahren in der Medizinbranche weiß er, wie man Ideen marktfähig macht. Seine Liebe zum Tauchen – stets auf der Suche nach verborgenen „Schätzen“ unter der Oberfläche – spiegelt sich in seinem Arbeitsstil wider: Er durchdringt komplexe Herausforderungen, um nachhaltige Lösungen zu finden. Von Harry ließ er sich zudem zum Himmel entführen und absolvierte seine Flugausbildung – heute sieht er Projekte gern aus beiden Perspektiven: von oben (strategisch) und von unten (operativ).
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}


