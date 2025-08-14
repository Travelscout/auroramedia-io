import React from "react";
import { Sparkles, Server, Phone } from "lucide-react";

export type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export const FEATURES: { icon: IconComponent; title: string; desc: string }[] = [
  {
    icon: Sparkles,
    title: "Conversational AI & Voicebots",
    desc: "Natürliche Dialoge für Sales & Support, nahtlos in WhatsApp, Telefon & Web.",
  },
  {
    icon: Server,
    title: "Self-hosted LLM & RAG",
    desc: "Datenschutzfreundliche Knowledge-Bots. Ideal für Praxen & Kliniken.",
  },
  {
    icon: Phone,
    title: "Automatisierte Lead-Qualifizierung",
    desc: "SPIN/Sales-optimierte Gesprächslogik + CRM-Integration (z. B. GoHighLevel).",
  },
];

export const PLANS: { title: string; price: string; desc: string; btn: string; variant?: "default" | "ghost" }[] = [
  { title: "Starter", price: "€499", desc: "Für Pilotprojekte & kleine Praxen.", btn: "Jetzt anfragen" },
  { title: "Business", price: "€1499", desc: "Skalierbare Agenten & CRM-Integration.", btn: "Demo buchen" },
  { title: "Enterprise", price: "auf Anfrage", desc: "On-prem / Dedicated LLM & SLA.", btn: "Kontakt", variant: "ghost" },
];


