"use client"

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MessageSquare, PhoneCall } from "lucide-react";

type UseCase = 'lead' | 'voice' | 'dsgvo';
type Channel = 'whatsapp' | 'email' | 'webchat' | 'voice';

export default function InteractiveDemo() {
  const [step, setStep] = useState<number>(1);
  const [useCase, setUseCase] = useState<UseCase | null>(null);
  const [channels, setChannels] = useState<Channel[]>([]);
  const [summary, setSummary] = useState<string>('');
  const [typing, setTyping] = useState<boolean>(false);
  const [, setMounted] = useState(false);

  const canNext = useMemo(() => {
    if (step === 1) return !!useCase;
    if (step === 2) return channels.length > 0;
    return true;
  }, [step, useCase, channels]);

  function toggleChannel(c: Channel) {
    setChannels((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));
  }

  function next() {
    if (!canNext) return;
    if (step < 3) setStep(step + 1);
    else generate();
  }

  function back() {
    if (step > 1) setStep(step - 1);
  }

  function reset() {
    setStep(1);
    setUseCase(null);
    setChannels([]);
    setSummary('');
    setTyping(false);
  }

  function generate() {
    const caseLabel =
      useCase === 'lead'
        ? 'Lead‑Qualifizierung'
        : useCase === 'voice'
        ? 'Voicebot für Terminbuchungen'
        : 'DSGVO & Hosting (EU/DE, Self‑hosted LLM)';
    const channelLabel = channels
      .map((c) => (c === 'whatsapp' ? 'WhatsApp' : c === 'email' ? 'E‑Mail' : c === 'webchat' ? 'Webchat' : 'Voice'))
      .join(', ');
    const text = `Konfiguration: ${caseLabel} über ${channelLabel}.\n\nSo könnte Ihr Assistent klingen:\n`;

    const example =
      useCase === 'lead'
        ? 'Hallo! Ich helfe Ihnen, in 2–3 Fragen herauszufinden, ob wir Ihnen sofort helfen können. Worum geht es genau?'
        : useCase === 'voice'
        ? 'Gern! Ich finde den nächstmöglichen Termin. Passt Ihnen kommenden Dienstag um 10:30 Uhr oder Mittwoch 14:00 Uhr?'
        : 'Ihre Daten bleiben in der EU. Möchten Sie Cloud (EU) oder dediziertes Hosting in Deutschland? Optional mit eigenem LLM.';

    setSummary('');
    setTyping(true);
    const full = text + example;
    let i = 0;
    const id = setInterval(() => {
      i += 2;
      setSummary(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(id);
        setTyping(false);
      }
    }, 15);
  }

  useEffect(() => setMounted(true), []);
  // Auto-Vorschau sobald Schritt 3 erreicht und Auswahl vorhanden ist
  useEffect(() => {
    if (step === 3 && useCase && channels.length > 0 && !typing && !summary) {
      generate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, useCase, channels]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Konfiguration */}
      <Card className="md:col-span-2">
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Interaktive Konfiguration</div>
            <Badge variant="secondary">Demo</Badge>
          </div>

          {/* Stepper */}
          <div className="mt-3">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className={step >= 1 ? "font-semibold text-slate-900" : ""}>1. Use Case</span>
              <span>›</span>
              <span className={step >= 2 ? "font-semibold text-slate-900" : ""}>2. Kanäle</span>
              <span>›</span>
              <span className={step >= 3 ? "font-semibold text-slate-900" : ""}>3. Vorschau</span>
            </div>
            <div className="mt-2 h-1 w-full rounded-full bg-slate-200">
              <div
                className="h-1 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 transition-all"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { key: "lead", label: "Lead‑Qualifizierung" },
                { key: "voice", label: "Voicebot Termine" },
                { key: "dsgvo", label: "DSGVO & Hosting" },
              ].map((it) => (
                <motion.div key={it.key} whileHover={{ scale: 1.02 }}>
                  <Button
                    className="w-full"
                    variant={useCase === (it.key as UseCase) ? "default" : "outline"}
                    onClick={() => setUseCase(it.key as UseCase)}
                  >
                    {it.label}
                  </Button>
                </motion.div>
              ))}
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { key: "whatsapp", label: "WhatsApp", Icon: MessageCircle },
                { key: "email", label: "E‑Mail", Icon: Mail },
                { key: "webchat", label: "Webchat", Icon: MessageSquare },
                { key: "voice", label: "Voice", Icon: PhoneCall },
              ].map(({ key, label, Icon }) => (
                <motion.div key={key} whileHover={{ scale: 1.04 }}>
                  <Button
                    className="w-full justify-start gap-2"
                    variant={channels.includes(key as Channel) ? "default" : "outline"}
                    onClick={() => toggleChannel(key as Channel)}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </Button>
                </motion.div>
              ))}
            </div>
          )}

          {/* Nav */}
          <div className="mt-4 flex items-center justify-between">
            <Button variant="ghost" onClick={back} disabled={step === 1}>
              Zurück
            </Button>
            {step < 3 ? (
              <Button onClick={next} disabled={!canNext}>
                Weiter
              </Button>
            ) : (
              <Button onClick={generate} disabled={typing}>
                Vorschau generieren
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Preview */}
      <div className="md:sticky md:top-4 h-fit">
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Vorschau</div>
              <Badge variant="secondary">DSGVO‑Demo</Badge>
            </div>
            <div className="mt-3 rounded-md border bg-slate-50 p-3 text-sm whitespace-pre-wrap min-h-[140px]">
              {typing ? (
                <div className="space-y-2 animate-pulse">
                  <div className="h-3 w-3/5 rounded bg-slate-200" />
                  <div className="h-3 w-4/5 rounded bg-slate-200" />
                  <div className="h-3 w-2/5 rounded bg-slate-200" />
                  <div className="h-3 w-3/5 rounded bg-slate-200" />
                </div>
              ) : summary ? (
                summary
              ) : (
                "Noch keine Vorschau. Wähle Use Case & Kanäle."
              )}
            </div>
            {!typing && summary && (
              <div className="mt-3 flex gap-2">
                <Button asChild>
                  <Link href={`/kontakt?subject=${encodeURIComponent('Demo anfragen: ' + (useCase ?? 'Assistent'))}`}>
                    Demo anfragen
                  </Link>
                </Button>
                <Button variant="outline" onClick={reset}>
                  Neu starten
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


