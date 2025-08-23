export const metadata = {
  title: "Cases | AuroraMedia",
  description: "Fallstudien und Erfolge.",
};

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowUpRight, ArrowDownRight, AlertTriangle, Wand2, ThumbsUp, Phone, CheckCircle, Clock3, TrendingUp, Bug, Ticket, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import CaseModal from "./CaseModal";

export default function Page() {
  // Small inline sparkline (normalized 0..1)
  function Sparkline({ points, stroke = "#6366f1", strokeWidth = 2 }: { points: number[]; stroke?: string; strokeWidth?: number }) {
    const max = Math.max(...points);
    const min = Math.min(...points);
    const r = max === min ? 1 : max - min;
    const xs = points.map((_, i) => (i / (points.length - 1)) * 100);
    const ys = points.map(v => 100 - ((v - min) / r) * 100);
    const d = xs.map((x, i) => `${i === 0 ? "M" : "L"}${x.toFixed(2)},${ys[i].toFixed(2)}`).join(" ");
    return (
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-8 w-full" aria-hidden>
        <path d={d} fill="none" stroke={stroke} strokeWidth={strokeWidth} />
      </svg>
    );
  }

  function VisualHeader({ points, label, image }: { points: number[]; label: string; image: string }) {
    return (
      <div className="relative rounded-xl overflow-hidden h-28">
        <img src={image} alt="Case Visual" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/75" />
        <div className="absolute inset-0 p-3">
          <Sparkline points={points} stroke="#6366f1" strokeWidth={3} />
        </div>
        <div className="absolute right-3 top-3 text-[11px] rounded-full border px-2 py-0.5 bg-white/90 text-slate-700 border-slate-200">
          {label}
        </div>
      </div>
    );
  }
  function StatCard({ title, before, after, unit = "", good = "up" as "up" | "down", icon, spark, desc }: { title: string; before: number; after: number; unit?: string; good?: "up"|"down"; icon?: React.ReactNode; spark?: number[]; desc?: string }) {
    const change = before === 0 ? 0 : ((after - before) / before) * 100;
    const positive = (good === "up" && change >= 0) || (good === "down" && change <= 0);
    const Icon = (good === "up" ? ArrowUpRight : ArrowDownRight);
    const beforePct = Math.max(0, Math.min(100, before));
    const afterPct = Math.max(0, Math.min(100, after));
    return (
      <div className="rounded-xl border p-4 bg-white min-h-[152px] flex flex-col">
        {/* Titel + Delta */}
        <div className="flex items-center justify-between gap-2">
          <div className="text-sm font-medium text-slate-900 inline-flex items-center gap-2">{icon}{title}</div>
          <div className={`shrink-0 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs border ${positive ? "text-green-700 border-green-200 bg-green-50" : "text-rose-700 border-rose-200 bg-rose-50"}`}>
            <Icon className="h-3.5 w-3.5" /> {Math.abs(change).toFixed(0)}%
          </div>
        </div>
        {/* Aktueller Wert prominent */}
        <div className="mt-1 flex items-baseline gap-2">
          <div className="text-3xl font-semibold tracking-tight text-slate-900">{after}{unit}</div>
          <div className="text-[11px] text-slate-500">vorher {before}{unit}</div>
        </div>
        {desc && <div className="mt-1 text-[11px] text-slate-500">{desc}</div>}
        {/* Sparkline oder Balken */}
        <div className="mt-2">
          {spark ? (
            <Sparkline points={spark} stroke="#6366f1" />
          ) : (
            <>
              <div className="h-2 rounded-full bg-slate-200 overflow-hidden" aria-hidden>
                <div className="h-full bg-slate-400" style={{ width: `${beforePct}%` }} />
              </div>
              <div className="mt-2 h-2 rounded-full bg-indigo-100 overflow-hidden" aria-hidden>
                <div className="h-full bg-indigo-500" style={{ width: `${afterPct}%` }} />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold">Cases</h1>
        <Badge>Ausgewählte Projekte</Badge>
      </div>
      <p className="mt-3 text-slate-600">Einblicke in Projekte mit messbaren Ergebnissen. Beispielwerte – konkrete KPIs definieren wir im Pilot.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[{
          title: "Arztpraxis – Call‑Deflection",
          kpis: ["−35 % Telefonaufkommen", "+12 % Terminqualität", "2,4 s Antwortzeit"],
        },{
          title: "KMU – Lead‑Qualifizierung",
          kpis: ["+18 % Conversion", "<14 Tage Pilot", "CRM‑Sync in Echtzeit"],
        },{
          title: "MedTech – Support‑Agent",
          kpis: ["−28 % Tickets", "+12 Punkte CSAT", "RAG‑Wissensbasis"],
        }].map((c, idx) => (
          <div key={c.title}>
            <Card className="transition hover:shadow-xl">
              <CardContent className="p-6">
                {/* Visual first */}
                <VisualHeader
                  points={idx===0?[100,96,93,90,86,80,75,70,67,65]:idx===1?[10,10.2,10.5,10.7,11,11.2,11.4,11.6,11.8,11.8]:[100,95,92,90,88,84,80,78,75,72]}
                  label="Visual KPI‑Trend"
                  image={idx===0?"/images/cases/clinic.jpg":idx===1?"/images/cases/kmu.jpg":"/images/cases/support.jpg"}
                />
                <div className="mt-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold">{c.title}</h2>
                  <span className="text-[11px] rounded-full border px-2 py-0.5 bg-emerald-50 text-emerald-700 border-emerald-200">Ergebnis in {idx===0?"8":idx===1?"6":"10"} Wochen</span>
                </div>
                {/* KPI grid first */}
                {idx === 0 && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <StatCard desc="Anrufe pro Tag (indexiert)" spark={[100,96,93,90,86,80,75,70,67,65]} icon={<Phone className="h-4 w-4 text-slate-500" />} title="Telefonaufkommen" before={100} after={65} unit="%" good="down" />
                    <StatCard desc="qualifizierte Termine" spark={[100,101,103,105,107,109,110,111,112,112]} icon={<CheckCircle className="h-4 w-4 text-slate-500" />} title="Terminqualität" before={100} after={112} unit="%" good="up" />
                    <StatCard desc="Ø Zeit bis Erstreaktion" spark={[4.8,4.5,4.2,4.0,3.6,3.2,2.9,2.6,2.4,2.4]} icon={<Clock3 className="h-4 w-4 text-slate-500" />} title="Antwortzeit" before={4.8} after={2.4} unit="s" good="down" />
                  </div>
                )}
                {idx === 1 && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <StatCard desc="Anteil kaufbereite Leads" spark={[10,10.2,10.5,10.7,11.0,11.2,11.4,11.6,11.8,11.8]} icon={<TrendingUp className="h-4 w-4 text-slate-500" />} title="Conversion" before={10} after={11.8} unit="%" good="up" />
                    <StatCard desc="Ø Zeit bis Erstkontakt" spark={[48,46,44,40,38,35,33,30,28,28]} icon={<Clock3 className="h-4 w-4 text-slate-500" />} title="Lead-Zeit" before={48} after={28} unit="h" good="down" />
                    <StatCard desc="CRM‑Fehlerquote" spark={[6,5.5,5,4.3,3.6,3,2.6,2.3,2,2]} icon={<Bug className="h-4 w-4 text-slate-500" />} title="CRM-Fehler" before={6} after={2} unit="%" good="down" />
                  </div>
                )}
                {idx === 2 && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <StatCard desc="Ticketvolumen (indexiert)" spark={[100,95,92,90,88,84,80,78,75,72]} icon={<Ticket className="h-4 w-4 text-slate-500" />} title="Tickets" before={100} after={72} unit="%" good="down" />
                    <StatCard desc="Kundenzufriedenheit" spark={[78,79,80,82,84,86,87,89,90,90]} icon={<Smile className="h-4 w-4 text-slate-500" />} title="CSAT" before={78} after={90} unit="%" good="up" />
                    <StatCard desc="Ø Zeit bis Lösung" spark={[30,28,26,25,24,22,21,20,19,18]} icon={<Clock3 className="h-4 w-4 text-slate-500" />} title="Lösungszeit" before={30} after={18} unit="h" good="down" />
                  </div>
                )}

                {/* Impact Chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.kpis.map((k) => (
                    <span key={k} className="text-[11px] rounded-full px-2 py-0.5 border bg-slate-50 text-slate-700 border-slate-200">{k}</span>
                  ))}
                </div>

                {/* Visual Problem → Lösung → Nutzen */}
                {/* Story: Vorher | Lösung | Nachher */}
                <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="rounded-xl border p-3 bg-white">
                    <div className="flex items-center gap-2 text-slate-700 font-medium text-sm"><AlertTriangle className="h-4 w-4" /> Vorher</div>
                    <ul className="mt-1 text-xs text-slate-600 list-disc pl-4">
                      {idx===0 && (<>
                        <li>Telefonzentrale überlastet</li>
                        <li>Lange Wartezeiten</li>
                        <li>Team gebunden</li>
                      </>)}
                      {idx===1 && (<>
                        <li>Viele kalte Leads</li>
                        <li>Keine Priorisierung</li>
                        <li>Manuelle Terminabstimmung</li>
                      </>)}
                      {idx===2 && (<>
                        <li>Hohe Ticketlast</li>
                        <li>Unklare Zuständigkeit</li>
                        <li>Lange Lösungszeit</li>
                      </>)}
                    </ul>
                  </div>
                  <div className="rounded-xl border p-3 bg-gradient-to-b from-indigo-50 to-white">
                    <div className="flex items-center gap-2 text-indigo-700 font-medium text-sm"><Wand2 className="h-4 w-4" /> Lösung</div>
                    <ul className="mt-1 text-xs text-slate-700 list-disc pl-4">
                      {idx===0 && (<>
                        <li>Voicebot triagiert und leitet weiter</li>
                        <li>Mehrsprachig, 24/7</li>
                        <li>CRM/Telefonie integriert</li>
                      </>)}
                      {idx===1 && (<>
                        <li>AI‑Bot qualifiziert & scored</li>
                        <li>Termine automatisch buchen</li>
                        <li>CRM‑Sync in Echtzeit</li>
                      </>)}
                      {idx===2 && (<>
                        <li>RAG‑Supportagent beantwortet</li>
                        <li>Triage nach Produkt/SLAs</li>
                        <li>Monitoring & Protokolle</li>
                      </>)}
                    </ul>
                  </div>
                  <div className="rounded-xl border p-3 bg-emerald-50">
                    <div className="flex items-center gap-2 text-emerald-700 font-medium text-sm"><ThumbsUp className="h-4 w-4" /> Nachher</div>
                    <ul className="mt-1 text-xs text-emerald-900 list-disc pl-4">
                      {idx===0 && (<>
                        <li>Weniger Wartezeit</li>
                        <li>Bessere Terminqualität</li>
                        <li>Entlastetes Team</li>
                      </>)}
                      {idx===1 && (<>
                        <li>Mehr Pipeline‑Qualität</li>
                        <li>Weniger Blindarbeit</li>
                        <li>Schneller zum Termin</li>
                      </>)}
                      {idx===2 && (<>
                        <li>Weniger Tickets</li>
                        <li>Höhere CSAT</li>
                        <li>Schnellere Lösung</li>
                      </>)}
                    </ul>
                  </div>
                </div>

                {/* Mini-Dashboard (Beispiel) */}
                {idx === 0 && (
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <StatCard desc="Anrufe pro Tag (indexiert)" spark={[100,96,93,90,86,80,75,70,67,65]} icon={<Phone className="h-4 w-4 text-slate-500" />} title="Telefonaufkommen" before={100} after={65} unit="%" good="down" />
                    <StatCard desc="qualifizierte Termine" spark={[100,101,103,105,107,109,110,111,112,112]} icon={<CheckCircle className="h-4 w-4 text-slate-500" />} title="Terminqualität" before={100} after={112} unit="%" good="up" />
                    <StatCard desc="Ø Zeit bis Erstreaktion" spark={[4.8,4.5,4.2,4.0,3.6,3.2,2.9,2.6,2.4,2.4]} icon={<Clock3 className="h-4 w-4 text-slate-500" />} title="Antwortzeit" before={4.8} after={2.4} unit="s" good="down" />
                  </div>
                )}
                {idx === 1 && (
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <StatCard desc="Anteil kaufbereite Leads" spark={[10,10.2,10.5,10.7,11.0,11.2,11.4,11.6,11.8,11.8]} icon={<TrendingUp className="h-4 w-4 text-slate-500" />} title="Conversion" before={10} after={11.8} unit="%" good="up" />
                    <StatCard desc="Ø Zeit bis Erstkontakt" spark={[48,46,44,40,38,35,33,30,28,28]} icon={<Clock3 className="h-4 w-4 text-slate-500" />} title="Lead-Zeit" before={48} after={28} unit="h" good="down" />
                    <StatCard desc="CRM‑Fehlerquote" spark={[6,5.5,5,4.3,3.6,3,2.6,2.3,2,2]} icon={<Bug className="h-4 w-4 text-slate-500" />} title="CRM-Fehler" before={6} after={2} unit="%" good="down" />
                  </div>
                )}
                {idx === 2 && (
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <StatCard desc="Ticketvolumen (indexiert)" spark={[100,95,92,90,88,84,80,78,75,72]} icon={<Ticket className="h-4 w-4 text-slate-500" />} title="Tickets" before={100} after={72} unit="%" good="down" />
                    <StatCard desc="Kundenzufriedenheit" spark={[78,79,80,82,84,86,87,89,90,90]} icon={<Smile className="h-4 w-4 text-slate-500" />} title="CSAT" before={78} after={90} unit="%" good="up" />
                    <StatCard desc="Ø Zeit bis Lösung" spark={[30,28,26,25,24,22,21,20,19,18]} icon={<Clock3 className="h-4 w-4 text-slate-500" />} title="Lösungszeit" before={30} after={18} unit="h" good="down" />
                  </div>
                )}

                {/* Tech-Stack + DSGVO */}
                <div className="mt-5 flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex gap-2">
                    <span className="rounded-full border px-2 py-0.5 bg-slate-50">n8n</span>
                    <span className="rounded-full border px-2 py-0.5 bg-slate-50">Twilio/Placetel</span>
                    <span className="rounded-full border px-2 py-0.5 bg-slate-50">HubSpot</span>
                    <span className="rounded-full border px-2 py-0.5 bg-slate-50">OpenAI</span>
                  </div>
                  <div>EU/DE‑Hosting · AVV vorhanden</div>
                </div>

                <div className="mt-5 flex gap-2">
                  {idx === 0 && (
                    <CaseModal title="Use Cases – Kliniken & Ärzte">
                      <h3>🏥 Use Cases für Kliniken &amp; Ärzte</h3>
                      <h4>1. Automatisierte Patientenkommunikation (Voice- &amp; Chatbots)</h4>
                      <ul>
                        <li><strong>Problem:</strong> Patientenanrufe überlasten die Zentrale.</li>
                        <li><strong>Lösung:</strong> KI‑Voicebot qualifiziert Anrufe und leitet nur komplexe Fälle weiter.</li>
                        <li><strong>Nutzen:</strong> Kürzere Wartezeiten, Entlastung, zufriedenere Patienten.</li>
                      </ul>
                      <h4>2. Intelligentes Terminmanagement</h4>
                      <ul>
                        <li><strong>Problem:</strong> No‑Shows & ineffiziente Vergabe.</li>
                        <li><strong>Lösung:</strong> Erinnerungen (SMS/WhatsApp), dynamische Umbuchung, Dringlichkeit.</li>
                        <li><strong>Nutzen:</strong> Höhere Auslastung, weniger Ausfälle.</li>
                      </ul>
                      <h4>3. KI‑gestützte Reputationsanalyse</h4>
                      <ul>
                        <li><strong>Problem:</strong> Wenig Transparenz bei Bewertungen.</li>
                        <li><strong>Lösung:</strong> Sentiment‑Analyse & Trends mit Maßnahmen.</li>
                        <li><strong>Nutzen:</strong> Vertrauensaufbau & Marketing‑Optimierung.</li>
                      </ul>
                      <h4>4. Automatisierte Patientenaufklärung (Pre‑ &amp; Post‑OP)</h4>
                      <ul>
                        <li><strong>Problem:</strong> Wiederholte Aufklärung, Wissensverlust.</li>
                        <li><strong>Lösung:</strong> App/Video‑Voicebot erklärt vor/nach OP individuell.</li>
                        <li><strong>Nutzen:</strong> Besser informierte Patienten, weniger Rückfragen.</li>
                      </ul>
                      <h4>5. Clinical Workflow Automatisierung (CRM + KI)</h4>
                      <ul>
                        <li><strong>Problem:</strong> Daten verteilt auf KIS/CRM/Labor.</li>
                        <li><strong>Lösung:</strong> n8n‑Workflows, automatische Akten, Nachsorge‑Fragebögen.</li>
                        <li><strong>Nutzen:</strong> Weniger Administration, mehr Zeit für Medizin.</li>
                      </ul>
                    </CaseModal>
                  )}
                  {idx === 1 && (
                    <CaseModal title="Use Cases – KMU">
                      <h3>📌 Use Cases: Lead‑Qualifizierung für KMU</h3>
                      <h4>1. Automatisierte Erstansprache von Leads</h4>
                      <ul>
                        <li><strong>Problem:</strong> Vertrieb arbeitet viel mit kalten Leads.</li>
                        <li><strong>Lösung:</strong> Conversational‑AI‑Bot (E‑Mail/WhatsApp/LinkedIn/Webchat) spricht Leads direkt nach Anfrage an, stellt Qualifikationsfragen (Budget, Bedarf, Zeitraum) und bewertet Antworten.</li>
                        <li><strong>Nutzen:</strong> Nur heiße Leads beim Vertrieb, weniger Zeitverlust.</li>
                      </ul>
                      <h4>2. Lead Scoring &amp; Priorisierung</h4>
                      <ul>
                        <li><strong>Problem:</strong> Unklar, welche Leads wertvoll sind.</li>
                        <li><strong>Lösung:</strong> KI bewertet nach Unternehmensgröße, Branche, Kaufkraft und Verhalten (Klicks, Downloads).</li>
                        <li><strong>Nutzen:</strong> Sales bearbeitet die besten Leads zuerst; Conversion steigt.</li>
                      </ul>
                      <h4>3. Terminbuchung in Echtzeit</h4>
                      <ul>
                        <li><strong>Problem:</strong> Absprünge wegen langsamer Terminfindung.</li>
                        <li><strong>Lösung:</strong> Bot schlägt freie Slots des Vertriebs vor und bucht direkt.</li>
                        <li><strong>Nutzen:</strong> Sofortige Bindung, kein Hin‑und‑Her.</li>
                      </ul>
                      <h4>4. Content‑basierte Qualifizierung</h4>
                      <ul>
                        <li><strong>Problem:</strong> Leads brauchen erst Vertrauen.</li>
                        <li><strong>Lösung:</strong> Automatisches Nurturing mit personalisiertem Content (Whitepaper, Cases, Videos), danach gezielte Qualifikationsfragen.</li>
                        <li><strong>Nutzen:</strong> Leads reifen, bis sie kaufbereit sind.</li>
                      </ul>
                      <h4>5. CRM‑Integration &amp; Follow‑Ups</h4>
                      <ul>
                        <li><strong>Problem:</strong> Follow‑Ups passieren nicht rechtzeitig.</li>
                        <li><strong>Lösung:</strong> KI‑Agent erstellt automatische Follow‑Ups im CRM (HubSpot, Dynamics, GoHighLevel) per Mail/WhatsApp.</li>
                        <li><strong>Nutzen:</strong> Kein Lead geht verloren, Bindung steigt.</li>
                      </ul>
                      <h4>⚡ Beispiel: KMU im MedTech‑Bereich</h4>
                      <ul>
                        <li>Webseite generiert 20 Leads/Tag → Bot fragt Anwendungsfall, Budget, Dringlichkeit.</li>
                        <li>Heiße Leads → Termin &amp; Übergabe an Vertrieb.</li>
                        <li>Warme Leads → Content‑Nurturing.</li>
                        <li>Kalte Leads → geparkt im CRM.</li>
                      </ul>
                    </CaseModal>
                  )}
                  {idx === 2 && (
                    <CaseModal title="Use Cases – MedTech">
                      <h3>🧪 Use Cases für MedTech</h3>
                      <h4>1. Support‑Triage &amp; RAG</h4>
                      <ul>
                        <li><strong>Problem:</strong> Komplexe Produktfragen, lange Bearbeitungszeiten.</li>
                        <li><strong>Lösung:</strong> Triage nach Produkt/UDI/Fehlercode, Antworten aus RAG‑Wissensbasis.</li>
                        <li><strong>Nutzen:</strong> Weniger Tickets, schnellere Lösung.</li>
                      </ul>
                      <h4>2. Proaktive Status‑Updates</h4>
                      <ul>
                        <li><strong>Problem:</strong> Niedriger CSAT durch Ungewissheit.</li>
                        <li><strong>Lösung:</strong> Automatische Benachrichtigungen bei Fall‑/Lieferstatus.</li>
                        <li><strong>Nutzen:</strong> +CSAT, weniger Nachfragen.</li>
                      </ul>
                      <h4>3. Field‑Service Dispatch</h4>
                      <ul>
                        <li><strong>Problem:</strong> Ressourcenplanung manuell.</li>
                        <li><strong>Lösung:</strong> Priorisierung nach Risiko/SLAs, automatische Einsatzplanung.</li>
                        <li><strong>Nutzen:</strong> Kürzere Ausfallzeiten.</li>
                      </ul>
                      <h4>4. Complaint Handling &amp; CAPA</h4>
                      <ul>
                        <li><strong>Problem:</strong> Hoher Dokumentationsaufwand.</li>
                        <li><strong>Lösung:</strong> Vorbefüllte Reports, strukturierte Daten, Übergabe an QMS.</li>
                        <li><strong>Nutzen:</strong> Schnellere Compliance‑Prozesse.</li>
                      </ul>
                      <h4>5. Regulatory/IFU Q&amp;A</h4>
                      <ul>
                        <li><strong>Problem:</strong> Viele wiederkehrende Fragen zu IFUs/Regeln.</li>
                        <li><strong>Lösung:</strong> Regelkonformer Q&amp;A‑Bot mit Quellen.</li>
                        <li><strong>Nutzen:</strong> Entlastung des Teams, konsistente Antworten.</li>
                      </ul>
                    </CaseModal>
                  )}
                  <Button variant="outline" asChild><a href="/kontakt">Kontakt <ArrowRight className="ml-1 h-4 w-4" /></a></Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </main>
  );
}


