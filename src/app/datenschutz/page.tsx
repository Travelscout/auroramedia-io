export const metadata = {
  title: "Datenschutzerklärung | AuroraMedia.io",
  description: "Informationen zur Verarbeitung personenbezogener Daten nach Art. 13 DSGVO.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-56 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-black mb-6">Datenschutzerklärung</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Informationen zur Verarbeitung personenbezogener Daten nach Art. 13 DSGVO
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-black mb-6">1. Verantwortlicher</h2>
              <div className="space-y-3 text-gray-700">
                <p className="text-lg"><strong>AuroraMedia.io Ltd. I.G.</strong> (part of Slej Holdings Ltd.)</p>
                <p><strong>Mbr. MT C 73042</strong> · EUID: MTROC.C73042</p>
                <p><strong>Adresse:</strong> Siku Court, Flat 3, Ghajn Qamar Street, Xagħra, Malta</p>
                <p><strong>E-Mail:</strong> info@auroramedia.io</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg mt-8">
              <h2 className="text-2xl font-bold text-black mb-6">2. Zwecke und Rechtsgrundlagen</h2>
              <p className="text-gray-700 mb-4">Wir verarbeiten personenbezogene Daten gemäß DSGVO zu folgenden Zwecken:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Bereitstellung der Website und Systemsicherheit (Art. 6 Abs. 1 lit. f DSGVO).</li>
                <li>Bearbeitung von Anfragen über das Kontaktformular (Art. 6 Abs. 1 lit. a, b DSGVO).</li>
                <li>Vorvertragliche/vertragliche Kommunikation zu unseren Leistungen (Art. 6 Abs. 1 lit. b DSGVO).</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg mt-8">
              <h2 className="text-2xl font-bold text-black mb-6">3. Kategorien verarbeiteter Daten</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Protokolldaten:</strong> IP-Adresse, Datum/Uhrzeit, Referrer, User-Agent, aufgerufene Ressourcen.</li>
                <li><strong>Kontaktformulardaten:</strong> Name, E-Mail, Nachricht.</li>
                <li><strong>Kommunikationsdaten:</strong> Im Rahmen der Anfragebearbeitung.</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg mt-8">
              <h2 className="text-2xl font-bold text-black mb-6">4. Hosting und Auftragsverarbeiter</h2>
              <p className="text-gray-700 mb-4">Die Website wird technisch betrieben und ausgeliefert über Infrastruktur- und Hosting-Dienstleister. Sofern Dienstleister in unserem Auftrag tätig sind, bestehen Auftragsverarbeitungsverträge nach Art. 28 DSGVO.</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Webhosting/Deployment:</strong> Vercel, Inc. (EU/EWR-Standorte, ggf. Drittlandübermittlung mit EU-Standardvertragsklauseln).</li>
                <li><strong>AI/Backend-Infrastruktur:</strong> Hetzner Online GmbH (Deutschland/EU).</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg mt-8">
              <h2 className="text-2xl font-bold text-black mb-6">5. Drittlandübermittlung</h2>
              <p className="text-gray-700">Sofern Daten in Drittländer (z. B. USA) übermittelt werden, erfolgt dies auf Grundlage geeigneter Garantien i. S. d. Art. 46 DSGVO (insb. EU-Standardvertragsklauseln). <strong>Wo möglich, verarbeiten wir Daten innerhalb der EU/EWR.</strong></p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg mt-8">
              <h2 className="text-2xl font-bold text-black mb-6">6. Speicherdauer</h2>
              <div className="space-y-3 text-gray-700">
                <p><strong>Protokolldaten:</strong> Werden aus Sicherheitsgründen für bis zu 7 Tage vorgehalten und anschließend gelöscht.</p>
                <p><strong>Kontaktformulardaten:</strong> Speichern wir für die Dauer der Bearbeitung und gesetzlicher Aufbewahrungspflichten.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg mt-8">
              <h2 className="text-2xl font-bold text-black mb-6">7. Kontaktformular</h2>
              <p className="text-gray-700">Bei Nutzung des Kontaktformulars verarbeiten wir die von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und – soweit einschlägig – die Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO). <strong>Sie können eine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.</strong></p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg mt-8">
              <h2 className="text-2xl font-bold text-black mb-6">8. Cookies, Tracking, Einwilligungen</h2>
              <p className="text-gray-700">Wir setzen derzeit keine nicht notwendigen Cookies oder Tracking-Dienste ohne Ihre Einwilligung ein. Sollten künftig Analyse- oder Marketing-Tools verwendet werden, holen wir vorab eine Einwilligung über ein Consent-Management ein (Art. 6 Abs. 1 lit. a DSGVO).</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg mt-8">
              <h2 className="text-2xl font-bold text-black mb-6">9. Betroffenenrechte</h2>
              <p className="text-gray-700 mb-4">Sie haben nach Art. 15–21 DSGVO insbesondere das Recht auf:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Auskunft</li>
                <li>Berichtigung</li>
                <li>Löschung</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
                <li>Widerspruch gegen Verarbeitungsvorgänge</li>
              </ul>
              <p className="text-gray-700 mt-4">Sie haben zudem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren (Art. 77 DSGVO).</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg mt-8">
              <h2 className="text-2xl font-bold text-black mb-6">10. Pflicht zur Bereitstellung</h2>
              <div className="space-y-3 text-gray-700">
                <p><strong>Protokolldaten:</strong> Sind für den Betrieb der Website technisch erforderlich.</p>
                <p><strong>Kontaktformulardaten:</strong> Sind zur Bearbeitung Ihrer Anfrage erforderlich.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg mt-8">
              <h2 className="text-2xl font-bold text-black mb-6">11. Aktualität</h2>
              <p className="text-gray-700">Diese Datenschutzerklärung ist aktuell und wird bei Bedarf an geänderte Verarbeitungen angepasst.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


