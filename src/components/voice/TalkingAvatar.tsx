"use client";

import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Loader2 } from 'lucide-react';

interface CustomSpeechRecognitionEvent {
  resultIndex: number;
  results: {
    length: number;
    [index: number]: {
      isFinal: boolean;
      [index: number]: {
        transcript: string;
      };
    };
  };
}

interface CustomSpeechRecognition {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: (event: CustomSpeechRecognitionEvent) => void;
  onerror: (event: Event) => void;
  onend: () => void;
  start: () => void;
  stop: () => void;
}

declare global {
  interface Window {
    webkitSpeechRecognition?: new () => CustomSpeechRecognition;
    SpeechRecognition?: new () => CustomSpeechRecognition;
  }
}

type Props = {
  onResult?: (reply: string) => void;
  lang?: string;
};

export default function TalkingAvatar({ onResult, lang = "de-DE" }: Props) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [mounted, setMounted] = useState(false);
  const recognitionRef = useRef<CustomSpeechRecognition | null>(null);

  const recognitionSupported = useMemo(() => {
    return typeof window !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition);
  }, []);

  const speak = useCallback((text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    try {
      // Alle verfügbaren Stimmen laden
      const voices = window.speechSynthesis.getVoices();
      
      // Anna-Stimme finden (deutsche, weibliche Stimme)
      let annaVoice = voices.find(voice => 
        voice.name.toLowerCase().includes('anna') || 
        (voice.lang.startsWith('de') && voice.name.toLowerCase().includes('female'))
      );
      
      // Fallback: Erste deutsche Stimme
      if (!annaVoice) {
        annaVoice = voices.find(voice => voice.lang.startsWith('de'));
      }
      
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang;
      u.voice = annaVoice || null;
      u.rate = 0.9; // Etwas langsamer für natürlichere Aussprache
      u.pitch = 1.1; // Leicht höhere Tonhöhe für freundlicheren Klang
      u.volume = 1.0; // Volle Lautstärke
      
      setIsProcessing(true);
      u.onend = () => setIsProcessing(false);
      
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    } catch {
      /* noop */
    }
  }, [lang]);

  const ask = useCallback(async (message: string) => {
    if (!message.trim()) return;
    setIsProcessing(true);
    // User-Input sofort leeren nach dem Absenden
    setTranscript("");
    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });
      const data = await r.json();
      const reply = data.reply || "";
      onResult?.(reply);
      if (reply) speak(reply);
    } finally {
      setIsProcessing(false);
    }
  }, [onResult, speak]);

  const startListening = useCallback(() => {
    if (!recognitionSupported || isListening) return;
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) return;
    const rec = new Recognition();
    rec.lang = lang;
    rec.continuous = false;
    rec.interimResults = true;
    setTranscript("");
    rec.onresult = (e: CustomSpeechRecognitionEvent) => {
      let finalText = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const res = e.results[i];
        if (res.isFinal) finalText += res[0].transcript;
        else setTranscript(res[0].transcript);
      }
      if (finalText) {
        setTranscript(finalText);
        ask(finalText);
      }
    };
    rec.onend = () => setIsListening(false);
    rec.onerror = () => setIsListening(false);
    rec.start();
    setIsListening(true);
  }, [ask, lang, isListening, recognitionSupported]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop?.();
    setIsListening(false);
  }, []);

  useEffect(() => {
    return () => stopListening();
  }, [stopListening]);

  useEffect(() => {
    setMounted(true);
    
    // Stimmen laden, falls sie noch nicht verfügbar sind
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const loadVoices = () => {
        window.speechSynthesis.getVoices();
      };
      
      // Stimmen sofort laden, falls verfügbar
      loadVoices();
      
      // Event-Listener für Stimmen-Änderungen
      window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
      
      return () => {
        window.speechSynthesis.removeEventListener('voiceschanged', loadVoices);
      };
    }
  }, []);

  if (!mounted) return null; // vermeidet SSR/CSR-Differenzen

  return (
    <div className="absolute -right-4 -bottom-4">
      <div className="flex gap-2 justify-end">
        {recognitionSupported && !isListening && (
          <Button size="sm" variant="secondary" onClick={startListening} aria-label="Sprachaufnahme starten">
            <Mic className="h-4 w-4" />
          </Button>
        )}
        {isListening && (
          <Button size="sm" variant="destructive" onClick={stopListening} aria-label="Sprachaufnahme stoppen">
            <MicOff className="h-4 w-4" />
          </Button>
        )}
        {isProcessing && (
          <Button size="sm" variant="secondary" disabled>
            <Loader2 className="h-4 w-4 animate-spin" />
          </Button>
        )}
      </div>

      {transcript && (
        <div className="mt-2 max-w-xs text-right text-[11px] text-slate-500 line-clamp-2">{transcript}</div>
      )}
    </div>
  );
}


