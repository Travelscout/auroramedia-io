'use client';

import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>
      
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Bereit für die{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            digitale Zukunft?
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
          Lassen Sie uns gemeinsam Ihr nächstes Projekt mit KI-Power realisieren
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            Kostenloses Erstgespräch
          </button>
          <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
            Portfolio ansehen
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
