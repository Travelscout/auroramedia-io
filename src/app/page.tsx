"use client";

import React from "react";
// import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Server, Bot } from "lucide-react";
import { FEATURES, PLANS } from "@/lib/content";

export default function AuroraHome() {
  const shouldReduce = useReducedMotion();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <main id="main" className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <Badge className="mb-4">Neu · KI-Agenten</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Wir bauen KI-Agenten, die dein Vertriebsteam entlasten.</h1>
            <p className="mt-4 text-lg text-slate-600">AuroraMedia ist die neue AI-Agentur am Himmel von Düsseldorf — Design-first, DSGVO-sicher und sofort einsetzbar. Von Lead-Qualifizierung über Voicebots bis zu RAG-basierten Assistenzsystemen.</p>

            <div className="mt-6 flex gap-4">
              <Button>Demo anfragen</Button>
              <Button variant="outline">Preise ansehen</Button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-3">
                <Bot className="w-5 h-5" aria-hidden="true" />
                <div>
                  <div className="font-medium">Automatisierung</div>
                  <div className="text-slate-500">Workflows & Voicebots</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Server className="w-5 h-5" aria-hidden="true" />
                <div>
                  <div className="font-medium">DSGVO-konform</div>
                  <div className="text-slate-500">Self-hosting & Hetzner-ready</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl shadow-xl overflow-hidden bg-white p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Live AI-Preview</div>
                <div className="text-xs text-slate-400">Interaktiv</div>
              </div>
              <div className="mt-4 h-56 bg-gradient-to-br from-slate-50 to-white rounded-lg flex items-center justify-center">
                <div className="text-center text-slate-400">AI-Demo Widget kommt hierhin</div>
              </div>
            </div>
            <div className="absolute -right-6 -bottom-6 w-40 h-40 rounded-3xl bg-gradient-to-tr from-indigo-200 to-pink-200 opacity-40 blur-2xl pointer-events-none" aria-hidden />
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12">
          <h2 className="text-2xl font-semibold">Unsere Kernleistungen</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <Card key={feature.title}>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <feature.icon className="w-6 h-6 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-slate-500 mt-1">{feature.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* AI Demo Section */}
        <section id="ai-demo" className="py-12">
          <h2 className="text-2xl font-semibold">Interaktive AI-Demo</h2>
          <p className="text-slate-600 mt-2">Teste einen schlanken Demo-Flow — direkt auf der Seite (ohne Datenfreigabe) oder als Live-Session.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardContent>
                  <div className="flex flex-col gap-3">
                    <div className="text-sm text-slate-500">Schreibe hier deine Frage an den Agenten (Beispiel: &quot;Ich brauche ein Beratungsgespräch für Z-Laser&quot;)</div>
                    <form onSubmit={handleSubmit} className="flex gap-3">
                      <label htmlFor="question" className="sr-only">Frage an den Agenten</label>
                      <Input id="question" name="question" placeholder="Frage an den Agenten..." />
                      <Button type="submit">Absenden</Button>
                    </form>
                    <div className="mt-4 text-xs text-slate-400">Hinweis: Demo speichert keine personenbezogenen Daten.</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardContent>
                  <div className="text-sm">Technik-Info</div>
                  <ul className="mt-3 text-sm text-slate-600 list-disc pl-5">
                    <li>Self-hosted LLM (optional)</li>
                    <li>RAG mit Pinecone/Weaviate oder eigenem Vektorstore</li>
                    <li>n8n-Integration für Automatisierung</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-12">
          <h2 className="text-2xl font-semibold">Preismodelle</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <Card key={plan.title}>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-lg">{plan.title}</h3>
                    <div className="text-2xl font-bold mt-1">{plan.price}</div>
                    <p className="text-sm text-slate-500 mt-1">{plan.desc}</p>
                    <Button variant={plan.variant || "default"} className="mt-3">{plan.btn}</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
