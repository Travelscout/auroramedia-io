"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, MessageCircle, PhoneCall, Mail, Calendar, 
  TrendingUp, Clock, Euro, Users, Check, 
  Stethoscope, Building2, Rocket, ShoppingCart,
  Headphones, Briefcase, Play, Volume2, Loader2
} from "lucide-react";

type Industry = 'medical' | 'kmu' | 'startup' | 'ecommerce';
type UseCase = 'support' | 'sales' | 'booking' | 'qualification';

interface IndustryConfig {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  useCases: UseCase[];
  metrics: {
    timesSaved: string;
    costSaving: string;
    automation: string;
    satisfaction: string;
  };
  demoDialogs: Array<{
    user: string;
    agent: string;
    delay?: number;
  }>;
}

const INDUSTRIES: Record<Industry, IndustryConfig> = {
  medical: {
    icon: Stethoscope,
    title: "Arztpraxis & Kliniken",
    description: "Terminbuchung, Patientenanfragen, DSGVO-konforme Kommunikation",
    useCases: ['booking', 'support'],
    metrics: {
      timesSaved: "32h/Woche",
      costSaving: "€6.400/Monat",
      automation: "94%",
      satisfaction: "4.9/5"
    },
    demoDialogs: [
      {
        user: "Haben Sie noch Termine diese Woche frei?",
        agent: "Gerne schaue ich für Sie nach verfügbaren Terminen. Ich sehe freie Slots am Donnerstag um 14:30 und Freitag um 10:15. Welcher Termin passt Ihnen besser?",
        delay: 800
      },
      {
        user: "Donnerstag wäre perfekt!",
        agent: "Excellent! Ich reserviere Donnerstag, 14:30 Uhr für Sie. Darf ich noch Ihren Namen und Ihre Telefonnummer für die Bestätigung?",
        delay: 600
      }
    ]
  },
  kmu: {
    icon: Building2,
    title: "KMU & Mittelstand",
    description: "Lead-Qualifizierung, Kundenservice, Terminkoordination",
    useCases: ['qualification', 'support', 'sales'],
    metrics: {
      timesSaved: "28h/Woche",
      costSaving: "€4.800/Monat",
      automation: "87%",
      satisfaction: "4.7/5"
    },
    demoDialogs: [
      {
        user: "Ich interessiere mich für Ihre Dienstleistungen.",
        agent: "Das freut mich sehr! Um Ihnen das beste Angebot zu erstellen, darf ich fragen: Wie viele Mitarbeiter hat Ihr Unternehmen ungefähr?",
        delay: 700
      },
      {
        user: "Wir sind etwa 50 Leute.",
        agent: "Verstehe. Und in welchem Bereich suchen Sie hauptsächlich Unterstützung? Geht es um Automatisierung, Digitalisierung oder einen anderen Bereich?",
        delay: 900
      }
    ]
  },
  startup: {
    icon: Rocket,
    title: "Startups & Scale-ups",
    description: "Skalierbare Automation, Investor Relations, Growth Hacking",
    useCases: ['sales', 'support'],
    metrics: {
      timesSaved: "45h/Woche",
      costSaving: "€8.200/Monat",
      automation: "91%",
      satisfaction: "4.8/5"
    },
    demoDialogs: [
      {
        user: "Wie schnell können Sie uns beim Skalieren helfen?",
        agent: "Großartige Frage! Unsere KI-Lösungen sind darauf ausgelegt, mit Ihrem Wachstum mitzuskalieren. Bereits in den ersten 2 Wochen können wir erste Automationen implementieren. Was ist Ihr aktueller Engpass?",
        delay: 1000
      }
    ]
  },
  ecommerce: {
    icon: ShoppingCart,
    title: "E-Commerce & Online",
    description: "Kundenbetreuung 24/7, Retouren-Management, Upselling",
    useCases: ['support', 'sales'],
    metrics: {
      timesSaved: "55h/Woche",
      costSaving: "€9.600/Monat",
      automation: "96%",
      satisfaction: "4.6/5"
    },
    demoDialogs: [
      {
        user: "Meine Bestellung ist noch nicht angekommen.",
        agent: "Das tut mir leid! Gerne helfe ich Ihnen weiter. Können Sie mir Ihre Bestellnummer nennen? Dann schaue ich sofort nach dem Status Ihrer Sendung.",
        delay: 600
      }
    ]
  }
};

export default function EnhancedDemo() {
  const [step, setStep] = useState(1);
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);
  const [currentDialog, setCurrentDialog] = useState(0);
  const [isAgentTyping, setIsAgentTyping] = useState(false);
  const [showMetrics, setShowMetrics] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [chatMessages, setChatMessages] = useState<Array<{role: 'user' | 'agent', content: string}>>([]);
  const [isVoicePlaying, setIsVoicePlaying] = useState(false);
  const [confidenceLevel, setConfidenceLevel] = useState(0);

  const currentIndustryConfig = selectedIndustry ? INDUSTRIES[selectedIndustry] : null;

  const speakText = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      setIsVoicePlaying(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.9;
      utterance.onend = () => setIsVoicePlaying(false);
      speechSynthesis.speak(utterance);
    }
  }, []);

  const playDemoDialog = useCallback(async () => {
    if (!currentIndustryConfig || currentDialog >= currentIndustryConfig.demoDialogs.length) return;
    
    const dialog = currentIndustryConfig.demoDialogs[currentDialog];
    
    // Add user message
    setChatMessages(prev => [...prev, { role: 'user', content: dialog.user }]);
    
    // Show typing indicator
    setIsAgentTyping(true);
    await new Promise(resolve => setTimeout(resolve, dialog.delay || 800));
    
    // Add agent response
    setIsAgentTyping(false);
    setChatMessages(prev => [...prev, { role: 'agent', content: dialog.agent }]);
    
    // Speak the response
    speakText(dialog.agent);
    
    setCurrentDialog(prev => prev + 1);
  }, [currentIndustryConfig, currentDialog, speakText]);

  const calculateROI = useCallback(() => {
    if (!currentIndustryConfig) return;
    
    // Animate confidence meter
    let current = 0;
    const target = 95;
    const interval = setInterval(() => {
      current += 3;
      setConfidenceLevel(current);
      if (current >= target) {
        clearInterval(interval);
        setShowMetrics(true);
      }
    }, 50);
  }, [currentIndustryConfig]);

  useEffect(() => {
    if (step === 3 && selectedIndustry && selectedUseCase) {
      calculateROI();
    }
  }, [step, selectedIndustry, selectedUseCase, calculateROI]);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
      if (step === 2) {
        setChatMessages([]);
        setCurrentDialog(0);
      }
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedIndustry(null);
    setSelectedUseCase(null);
    setChatMessages([]);
    setCurrentDialog(0);
    setShowMetrics(false);
    setConfidenceLevel(0);
    setUserInput("");
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;
    
    setChatMessages(prev => [...prev, { role: 'user', content: userInput }]);
    setUserInput("");
    setIsAgentTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      setIsAgentTyping(false);
      const response = "Vielen Dank für Ihre Nachricht! Ein echtes KI-System würde hier eine intelligente, kontextbezogene Antwort generieren basierend auf Ihrem spezifischen Use Case.";
      setChatMessages(prev => [...prev, { role: 'agent', content: response }]);
      speakText(response);
    }, 1200);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex items-center space-x-6">
          {[
            { num: 1, label: "Branche" },
            { num: 2, label: "Use Case" },
            { num: 3, label: "Ergebnis" }
          ].map((s, idx) => (
            <div key={s.num} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                  s.num <= step 
                    ? 'bg-black text-white border-black' 
                    : 'bg-white text-gray-400 border-gray-300'
                }`}>
                  {s.num <= step ? (
                    s.num < step ? '✓' : s.num
                  ) : s.num}
                </div>
                <div className={`mt-2 text-xs font-medium transition-colors ${
                  s.num <= step ? 'text-black' : 'text-gray-400'
                }`}>
                  {s.label}
                </div>
              </div>
              {idx < 2 && (
                <div className={`w-20 h-0.5 mx-4 transition-all ${
                  s.num < step ? 'bg-black' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Industry Selection */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center space-y-3">
              <h3 className="text-3xl font-bold text-gray-900">Wählen Sie Ihre Branche</h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">Sehen Sie maßgeschneiderte KI-Lösungen für Ihren Bereich</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {Object.entries(INDUSTRIES).map(([key, config]) => {
                const Icon = config.icon;
                const isSelected = selectedIndustry === key;
                return (
                  <motion.div
                    key={key}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div 
                      className={`cursor-pointer transition-all duration-300 border-2 rounded-2xl p-6 ${
                        isSelected 
                          ? 'border-black bg-gray-50 shadow-lg' 
                          : 'border-gray-200 hover:border-gray-400 bg-white hover:shadow-md'
                      }`}
                      onClick={() => setSelectedIndustry(key as Industry)}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-4 rounded-xl transition-colors ${
                          isSelected 
                            ? 'bg-black text-white' 
                            : 'bg-gray-100 text-gray-700 group-hover:bg-gray-200'
                        }`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-xl text-gray-900 mb-2">{config.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{config.description}</p>
                          {isSelected && (
                            <div className="mt-3 flex items-center text-black text-sm font-medium">
                              <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                              Ausgewählt
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Step 2: Use Case Selection */}
        {step === 2 && currentIndustryConfig && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center space-y-3">
              <h3 className="text-3xl font-bold text-gray-900">Wählen Sie Ihren Use Case</h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">Welchen Bereich möchten Sie automatisieren?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { key: 'support' as UseCase, title: 'Kundenservice', icon: Headphones, desc: '24/7 Support-Automation' },
                { key: 'sales' as UseCase, title: 'Vertrieb', icon: Briefcase, desc: 'Lead-Generierung & Qualifizierung' },
                { key: 'booking' as UseCase, title: 'Terminbuchung', icon: Calendar, desc: 'Automatische Terminvergabe' },
                { key: 'qualification' as UseCase, title: 'Lead-Qualification', icon: Users, desc: 'Intelligente Kundenqualifizierung' }
              ].filter(item => currentIndustryConfig.useCases.includes(item.key)).map((useCase) => {
                const Icon = useCase.icon;
                const isSelected = selectedUseCase === useCase.key;
                return (
                  <motion.div
                    key={useCase.key}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div 
                      className={`cursor-pointer transition-all duration-300 border-2 rounded-2xl p-6 ${
                        isSelected 
                          ? 'border-black bg-gray-50 shadow-lg' 
                          : 'border-gray-200 hover:border-gray-400 bg-white hover:shadow-md'
                      }`}
                      onClick={() => setSelectedUseCase(useCase.key)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-4 rounded-xl transition-colors ${
                          isSelected 
                            ? 'bg-black text-white' 
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-xl text-gray-900 mb-1">{useCase.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{useCase.desc}</p>
                          {isSelected && (
                            <div className="mt-3 flex items-center text-black text-sm font-medium">
                              <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                              Ausgewählt
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Step 3: Live Demo & Results */}
        {step === 3 && currentIndustryConfig && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center space-y-3">
              <h3 className="text-3xl font-bold text-gray-900">Ihr KI-Agent in Aktion</h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">Erleben Sie eine echte Konversation</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Live Chat Demo */}
              <div className="border-2 border-gray-200 rounded-2xl h-[500px] bg-white">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-gray-100">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                        <Bot className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">KI-Agent</h4>
                      <p className="text-sm text-green-600">Online</p>
                    </div>
                    {isVoicePlaying && (
                      <div className="flex items-center px-3 py-1 bg-black text-white text-sm rounded-full">
                        <Volume2 className="w-4 h-4 mr-2" />
                        Spricht...
                      </div>
                    )}
                  </div>

                  <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                    <AnimatePresence>
                      {chatMessages.map((msg, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-xs px-4 py-3 rounded-2xl text-sm ${
                            msg.role === 'user' 
                              ? 'bg-black text-white' 
                              : 'bg-gray-100 text-gray-800 border border-gray-200'
                          }`}>
                            {msg.content}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    
                    {isAgentTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                        <div className="bg-gray-100 px-4 py-2 rounded-lg">
                          <div className="flex space-x-1">
                            {[1,2,3].map(i => (
                              <div key={i} className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" 
                                   style={{animationDelay: `${i * 0.2}s`}} />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="space-y-3">
                    {currentDialog < currentIndustryConfig.demoDialogs.length && (
                      <button 
                        onClick={playDemoDialog} 
                        className="w-full py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        disabled={isAgentTyping}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Nächster Dialog
                      </button>
                    )}
                    
                    <div className="flex space-x-3">
                      <Input
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Eigene Nachricht testen..."
                        className="flex-1 border-gray-300 rounded-xl"
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <button 
                        onClick={handleSendMessage} 
                        disabled={!userInput.trim() || isAgentTyping}
                        className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isAgentTyping ? <Loader2 className="w-4 h-4 animate-spin" /> : <MessageCircle className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics & ROI */}
              <div className="border-2 border-gray-200 rounded-2xl h-[500px] bg-white">
                <div className="p-6 h-full flex flex-col">
                  <h4 className="font-bold text-xl text-gray-900 mb-6">Ihre Erfolgs-Metriken</h4>
                  
                  {/* DSGVO Confidence Meter */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">DSGVO-Konformität</span>
                      <span className="text-sm text-gray-600">{confidenceLevel}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        className="bg-black h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${confidenceLevel}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    {confidenceLevel >= 90 && (
                      <div className="flex items-center mt-3 text-black text-sm font-medium">
                        <Check className="w-4 h-4 mr-2" />
                        EU-Hosting & Datenschutz garantiert
                      </div>
                    )}
                  </div>

                  {/* Metrics Cards */}
                  <AnimatePresence>
                    {showMetrics && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-2 gap-4"
                      >
                        <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
                          <div className="flex items-center justify-between mb-3">
                            <Clock className="w-6 h-6 text-gray-700" />
                            <TrendingUp className="w-4 h-4 text-black" />
                          </div>
                          <p className="text-2xl font-bold text-gray-900">
                            {currentIndustryConfig.metrics.timesSaved}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">Gesparte Zeit</p>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
                          <div className="flex items-center justify-between mb-3">
                            <Euro className="w-6 h-6 text-gray-700" />
                            <TrendingUp className="w-4 h-4 text-black" />
                          </div>
                          <p className="text-2xl font-bold text-gray-900">
                            {currentIndustryConfig.metrics.costSaving}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">Kostenersparnis</p>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
                          <div className="flex items-center justify-between mb-3">
                            <Bot className="w-6 h-6 text-gray-700" />
                            <TrendingUp className="w-4 h-4 text-black" />
                          </div>
                          <p className="text-2xl font-bold text-gray-900">
                            {currentIndustryConfig.metrics.automation}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">Automatisiert</p>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
                          <div className="flex items-center justify-between mb-3">
                            <Users className="w-6 h-6 text-gray-700" />
                            <TrendingUp className="w-4 h-4 text-black" />
                          </div>
                          <p className="text-2xl font-bold text-gray-900">
                            {currentIndustryConfig.metrics.satisfaction}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">Zufriedenheit</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: showMetrics ? 1 : 0.5 }}
                    className="mt-auto pt-6"
                  >
                    <button 
                      className="w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors text-center"
                      onClick={() => window.location.href = '/kontakt'}
                    >
                      Jetzt kostenloses Beratungsgespräch buchen
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
        <button 
          onClick={step === 1 ? handleReset : () => setStep(step - 1)}
          disabled={step === 1}
          className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {step === 1 ? 'Zurücksetzen' : 'Zurück'}
        </button>
        
        <div className="text-sm text-gray-500 font-medium">
          Schritt {step} von 3
        </div>
        
        <button 
          onClick={handleNext}
          disabled={
            (step === 1 && !selectedIndustry) || 
            (step === 2 && !selectedUseCase) ||
            step === 3
          }
          className="px-6 py-3 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {step === 3 ? 'Abgeschlossen' : 'Weiter'}
        </button>
      </div>
    </div>
  );
}
