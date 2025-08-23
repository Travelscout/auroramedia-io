'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Bot, Zap, TrendingUp, Clock, CheckCircle } from 'lucide-react';

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface UseCase {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  examples: string[];
}

const EnhancedDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [selectedUseCase, setSelectedUseCase] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [agentConfidence, setAgentConfidence] = useState(85);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const industries = [
    { id: 'healthcare', name: 'Gesundheitswesen', icon: '🏥' },
    { id: 'finance', name: 'Finanzwesen', icon: '💼' },
    { id: 'retail', name: 'Einzelhandel', icon: '🛍️' },
    { id: 'manufacturing', name: 'Produktion', icon: '🏭' },
    { id: 'education', name: 'Bildung', icon: '🎓' },
  ];

  const useCases: UseCase[] = [
    {
      id: 'customer-service',
      title: 'Kundenservice',
      description: '24/7 Kundenbetreuung mit KI',
      icon: <MessageSquare className="w-6 h-6" />,
      examples: ['FAQ-Antworten', 'Ticket-Erstellung', 'Live-Chat']
    },
    {
      id: 'appointment-booking',
      title: 'Terminbuchung',
      description: 'Intelligente Terminverwaltung',
      icon: <Clock className="w-6 h-6" />,
      examples: ['Kalender-Integration', 'Verfügbarkeitsprüfung', 'Erinnerungen']
    },
    {
      id: 'lead-qualification',
      title: 'Lead-Qualifizierung',
      description: 'Automatische Lead-Bewertung',
      icon: <TrendingUp className="w-6 h-6" />,
      examples: ['Scoring-Algorithmus', 'Priorisierung', 'Follow-up']
    }
  ];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const handleIndustrySelect = (industryId: string) => {
    setSelectedIndustry(industryId);
    setCurrentStep(2);
  };

  const handleUseCaseSelect = (useCaseId: string) => {
    setSelectedUseCase(useCaseId);
    setCurrentStep(3);
    // Start demo chat
    setTimeout(() => {
      setChatMessages([
        {
          id: '1',
          text: 'Hallo! Ich bin Ihr KI-Agent. Wie kann ich Ihnen heute helfen?',
          isUser: false,
          timestamp: new Date()
        }
      ]);
    }, 500);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: 'Ich verstehe Ihre Anfrage. Lassen Sie mich das für Sie bearbeiten...',
        isUser: false,
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const resetDemo = () => {
    setCurrentStep(1);
    setSelectedIndustry('');
    setSelectedUseCase('');
    setChatMessages([]);
    setInputMessage('');
    setAgentConfidence(85);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Live KI-Agent Builder
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Erleben Sie, wie einfach es ist, einen maßgeschneiderten KI-Agenten für Ihr Unternehmen zu erstellen
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  currentStep >= step 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-600 text-gray-300'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    currentStep > step ? 'bg-blue-500' : 'bg-gray-600'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold mb-6">Wählen Sie Ihre Branche</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {industries.map((industry) => (
                  <motion.button
                    key={industry.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleIndustrySelect(industry.id)}
                    className="p-6 bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-700/60"
                  >
                    <div className="text-4xl mb-4">{industry.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold mb-6">Wählen Sie Ihren Anwendungsfall</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {useCases.map((useCase) => (
                  <motion.button
                    key={useCase.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleUseCaseSelect(useCase.id)}
                    className="p-6 bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-700/60"
                  >
                    <div className="text-blue-400 mb-4">{useCase.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-gray-400 mb-4">{useCase.description}</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {useCase.examples.map((example, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Ihr KI-Agent ist bereit!</h2>
                <p className="text-gray-300">Testen Sie ihn jetzt in einer Live-Demo</p>
              </div>

              {/* Chat Interface */}
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
                {/* Agent Info */}
                <div className="flex items-center gap-4 mb-6 p-4 bg-gray-700/30 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">KI-Agent für {industries.find(i => i.id === selectedIndustry)?.name}</h3>
                    <p className="text-sm text-gray-400">{useCases.find(u => u.id === selectedUseCase)?.title}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">Vertrauen</div>
                    <div className="text-2xl font-bold text-green-400">{agentConfidence}%</div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="h-96 overflow-y-auto mb-4 space-y-4">
                  {chatMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs lg:max-w-md p-3 rounded-lg ${
                        message.isUser
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-700 text-gray-100'
                      }`}>
                        <p>{message.text}</p>
                        <div className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-700 text-gray-100 p-3 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                {/* Input */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Schreiben Sie eine Nachricht..."
                    className="flex-1 px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                  >
                    Senden
                  </button>
                </div>
              </div>

              {/* Reset Button */}
              <div className="text-center mt-6">
                <button
                  onClick={resetDemo}
                  className="px-6 py-2 border border-gray-600/50 rounded-lg hover:bg-gray-700/30 transition-colors duration-200"
                >
                  Demo neu starten
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            Bereit für Ihren eigenen KI-Agenten?
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105"
          >
            Kostenloses Erstgespräch
            <Zap className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EnhancedDemo;
