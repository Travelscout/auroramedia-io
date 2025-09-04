export const metadata = {
  title: "Impressum | AuroraMedia.io",
  description: "Angaben gemäß § 5 TMG / Unternehmensangaben.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-56 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-black mb-6">Impressum</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Angaben gemäß § 5 TMG / Unternehmensangaben
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-black mb-6">Unternehmensangaben</h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-lg">Firma</p>
                    <p>AuroraMedia.io Ltd. I.G. (part of Slej Holdings Ltd.)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Identifikationen</p>
                    <p>Mbr. MT C 73042 · EUID: MTROC.C73042</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p>Siku Court, Flat 3, Ghajn Qamar Street, Xagħra, Malta</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">E-Mail</p>
                    <p>info@auroramedia.io</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <p>—</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg mt-8">
              <h2 className="text-2xl font-bold text-black mb-6">Rechtliche Hinweise</h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Inhaltlich Verantwortliche</p>
                    <p>Geschäftsführung AuroraMedia.io Ltd. I.G.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">EU-Streitschlichtung</p>
                    <p>Plattform der EU-Kommission: <a href="https://ec.europa.eu/consumers/odr" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a></p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Haftung für Inhalte/Links</p>
                    <p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für externe Inhalte.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


