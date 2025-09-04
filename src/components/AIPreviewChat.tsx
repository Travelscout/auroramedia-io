'use client';

import React, { useState } from 'react';
import { MessageCircle, Send, Mic } from 'lucide-react';



interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function AIPreviewChat() {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hallo! Ich bin Ihr KI-Assistent von AuroraMedia. Wie kann ich Ihnen helfen?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-preview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json();
      
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: data.reply,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: 'Entschuldigung, es gab einen Fehler. Bitte versuchen Sie es später erneut.',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleVoiceInput = () => {
    // Prüfe ob wir über HTTPS sind (erforderlich für Speech Recognition)
    if (typeof window !== 'undefined' && window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
      alert('Spracherkennung funktioniert nur über HTTPS oder localhost.');
      return;
    }

    if (!('webkitSpeechRecognition' in window)) {
      alert('Spracherkennung wird in diesem Browser nicht unterstützt. Bitte verwenden Sie Chrome oder Edge.');
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    setIsListening(true);

    try {
      // @ts-ignore
      const recognition = new (window as any).webkitSpeechRecognition();
      
      recognition.lang = 'de-DE';
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        console.log('Spracherkennung gestartet');
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        console.log('Erkannt:', transcript);
        setInputMessage(transcript);
        setIsListening(false);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        if (event.error === 'not-allowed') {
          alert('Bitte erlauben Sie den Zugriff auf das Mikrofon.');
        } else {
          alert('Fehler bei der Spracherkennung: ' + event.error);
        }
        setIsListening(false);
      };

      recognition.onend = () => {
        console.log('Spracherkennung beendet');
        setIsListening(false);
      };

      recognition.start();
    } catch (error) {
      console.error('Fehler beim Starten der Spracherkennung:', error);
      alert('Fehler beim Starten der Spracherkennung.');
      setIsListening(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Chat Messages */}
      <div className="h-64 overflow-y-auto space-y-3 p-4 bg-gray-50 rounded-lg">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs p-3 rounded-lg ${
              message.isUser
                ? 'bg-black text-white'
                : 'bg-white text-black border border-gray-200'
            }`}>
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white text-black border border-gray-200 p-3 rounded-lg">
              <p className="text-sm">KI-Assistent schreibt...</p>
            </div>
          </div>
        )}
      </div>

      {/* Input Field */}
      <div className="flex gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ihre Frage..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          disabled={isLoading}
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading || !inputMessage.trim()}
          className="px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
        >
          <Send className="w-5 h-5" />
        </button>
        <button 
          onClick={handleVoiceInput}
          className={`px-4 py-3 rounded-lg transition-all duration-300 ${
            isListening 
              ? 'bg-red-500 text-white hover:bg-red-600 animate-pulse' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          title={isListening ? 'Aufnahme läuft...' : 'Sprachaufnahme starten'}
        >
          <Mic className={`w-5 h-5 ${isListening ? 'animate-bounce' : ''}`} />
        </button>
      </div>
    </div>
  );
}
