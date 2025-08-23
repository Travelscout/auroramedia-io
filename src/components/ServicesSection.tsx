'use client';

import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  delay: number;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      title: "AI-Webdesign",
      description: "KI-gestützte Design-Systeme für moderne, responsive Websites",
      icon: "🧠",
      features: ["Neural UX/UI", "Auto-Responsive", "A/B Testing"],
      delay: 0
    },
    {
      title: "Smart Analytics",
      description: "Intelligente Datenanalyse für optimierte Conversions",
      icon: "📊",
      features: ["Real-time Tracking", "Predictive Models", "ROI Optimization"],
      delay: 200
    },
    {
      title: "Cloud Infrastructure",
      description: "Skalierbare, sichere Hosting-Lösungen mit Edge-Computing",
      icon: "☁️",
      features: ["Auto-Scaling", "CDN Global", "99.9% Uptime"],
      delay: 400
    }
  ];

  return (
    <section id="services" className="relative py-20 lg:py-32 bg-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(96,165,250,0.05) 50px, rgba(96,165,250,0.05) 100px)',
               animation: 'slide 20s linear infinite'
             }} />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Unsere Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Modernste Technologien für außergewöhnliche digitale Erlebnisse
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2"
              style={{ 
                animationDelay: `${service.delay}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl lg:text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 group-hover:bg-blue-300 transition-colors duration-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Neural connection lines */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-1 opacity-30 group-hover:opacity-100 transition-all duration-300"
                      style={{ 
                        animationDelay: `${i * 100}ms`,
                        animation: 'grow 0.5s ease-out forwards'
                      }}
                    />
                  ))}
                </div>

                {/* Hover Effect Button */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors duration-200 flex items-center gap-2">
                    Mehr erfahren
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <p className="text-gray-400 mb-6">
            Interessiert an unseren Services?
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            Beratung anfragen
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
