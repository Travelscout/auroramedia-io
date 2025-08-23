"use client";

import { useMotionValue, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import TeamAvatar from "@/components/team/TeamAvatar";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  paragraphs: string[];
  accent: string; // tailwind from- to- classes
};

const MEMBERS: TeamMember[] = [
  {
    name: "Mehdi Rahimi",
    role: "Founder & Geschäftsführer",
    image: "/images/team/mehdi.png",
    paragraphs: [
      "Mehdi ist der strategische Tausendsassa: Nach Stationen in der Touristik, einem BWL-Studium und prägenden Jahren in der Medizinbranche weiß er, wie man Ideen marktfähig macht.",
      "Seine Liebe zum Tauchen – stets auf der Suche nach verborgenen „Schätzen“ – prägt seinen Arbeitsstil: Er dringt in komplexe Herausforderungen ein und findet nachhaltige Lösungen. Heute betrachtet er Projekte aus beiden Perspektiven: von oben (strategisch) und von unten (operativ).",
    ],
    accent: "from-indigo-200 via-fuchsia-200 to-pink-200",
  },
  {
    name: "Sina Mohammadi",
    role: "Co‑Founder – Marketing & Growth",
    image: "/images/team/sina.jpg",
    paragraphs: [
      "Sina ist ein Marketingstratege mit internationalem Blick: Studium in International Business (DE/USA), Stationen in Management, Performance Marketing und Social Media Strategie.",
      "Er verbindet Digital Marketing, Leadgenerierung und Kampagnenmanagement mit präziser Umsetzung und Gespür für internationale Märkte. Mit CRM-Erfahrung (u. a. HubSpot) steuert er Teams zu hohem ROI – strategisch und operativ stark.",
    ],
    accent: "from-sky-200 via-emerald-200 to-teal-200",
  },
  {
    name: "Harry Stüdemann",
    role: "Co‑Founder – Technik & Operations",
    image: "/images/team/harry.jpg",
    paragraphs: [
      "Harry verbindet Präzision und Kreativität: ehemaliger Banker & IT‑Entwickler, analytisch, strukturiert.",
      "Als leidenschaftlicher Pilot und DAEC‑Prüfer bringt er die Disziplin der Luftfahrt in die Medienwelt – jedes Projekt wie ein Flug: geplant, bereit für neue Horizonte.",
    ],
    accent: "from-amber-200 via-rose-200 to-indigo-200",
  },
];

export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const blobX = useTransform(mx, [0, 1], ["-10%", "10%"]); // leichte Parallaxe
  const blobY = useTransform(my, [0, 1], ["-6%", "6%"]); 

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mx.set(x);
    my.set(y);
  };

  return (
    <section className="relative mt-12" onMouseMove={onMouseMove} ref={containerRef}>
      <h2 className="text-2xl font-semibold">Founder & Team</h2>

      {/* Parallax Deko */}
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="pointer-events-none absolute -z-10 left-10 top-0 h-48 w-48 rounded-3xl bg-gradient-to-tr from-indigo-100 to-pink-100 blur-2xl opacity-60"
        aria-hidden
      />
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="pointer-events-none absolute -z-10 right-10 top-24 h-56 w-56 rounded-3xl bg-gradient-to-tr from-emerald-100 to-sky-100 blur-2xl opacity-50"
        aria-hidden
      />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {MEMBERS.map((m) => (
          <motion.div key={m.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <Card className="relative overflow-hidden">
              <div className={`absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-tr ${m.accent}`} aria-hidden />
              <CardContent className="p-6 group">
                <div className="flex items-center gap-4">
                  <TeamAvatar src={m.image} alt={m.name} className="h-16 w-16 rounded-xl object-cover" />
                  <div>
                    <h3 className="text-lg font-semibold">{m.name}</h3>
                    <p className="text-sm text-slate-500">{m.role}</p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-slate-700 space-y-3">
                  {m.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


