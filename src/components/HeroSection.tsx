'use client';

import React from 'react';
import NeuralBackground from './NeuralBackground';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <NeuralBackground />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 neural-text-gradient">
          Aurora Media
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-gray-300 leading-relaxed max-w-3xl mx-auto">
          KI-gestützte Webentwicklung für die digitale Zukunft
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="neural-button group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
            <span className="relative z-10 flex items-center gap-3">
              Projekte entdecken
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          
          <button className="neural-button-outline px-8 py-4 rounded-full font-semibold text-lg">
            Beratung anfragen
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-400">Erfolgreiche Projekte</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">300%</div>
            <div className="text-gray-400">ROI Steigerung</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-400">KI-Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Mehr erfahren</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
