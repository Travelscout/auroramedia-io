export const metadata = {
  title: "Impressum | AuroraMedia.io",
  description: "Angaben gemäß § 5 TMG / Unternehmensangaben.",
};

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Impressum</h1>
      <div className="mt-6 space-y-4 text-slate-700">
        <p>
          <strong>Firma</strong>: AuroraMedia.io Ltd. I.G. (part of Slej Holdings Ltd.)
        </p>
        <p>
          <strong>Identifikationen</strong>: Mbr. MT C 73042 · EUID: MTROC.C73042
        </p>
        <p>
          <strong>Adresse</strong>: Siku Court, Flat 3, Ghajn Qamar Street, Xagħra, Malta
        </p>
        <p>
          <strong>E-Mail</strong>: info@auroramedia.io
        </p>
        <p>
          <strong>Telefon</strong>: —
        </p>
      </div>

      <div className="mt-10 space-y-2 text-sm text-slate-500">
        <p>Inhaltlich Verantwortliche: Geschäftsführung AuroraMedia.io Ltd. I.G.</p>
        <p>EU-Streitschlichtung: Plattform der EU-Kommission: https://ec.europa.eu/consumers/odr</p>
        <p>Haftung für Inhalte/Links: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für externe Inhalte.</p>
      </div>
    </main>
  );
}


