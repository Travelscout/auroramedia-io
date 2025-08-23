import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

// n8n Logo SVG
function N8nLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className="w-full h-full">
      <rect width="24" height="24" rx="4" fill="currentColor" />
      <path d="M7 8h3v8H7zm4 0h3v8h-3zm4 0h3v8h-3z" fill="white" />
      <circle cx="8.5" cy="12" r="1" fill="white" />
      <circle cx="12" cy="12" r="1" fill="white" />
      <circle cx="15.5" cy="12" r="1" fill="white" />
    </svg>
  );
}

// Originale Flag-SVGs in schwarz/weiß
function GermanFlag() {
  return (
    <svg width="32" height="24" viewBox="0 0 32 24" className="rounded border border-gray-200">
      <rect width="32" height="8" fill="#000000" />
      <rect y="8" width="32" height="8" fill="#DD0000" />
      <rect y="16" width="32" height="8" fill="#FFCE00" />
    </svg>
  );
}

function EUFlag() {
  return (
    <svg width="32" height="24" viewBox="0 0 32 24" className="rounded border border-gray-200">
      <rect width="32" height="24" fill="#003399" />
      <g transform="translate(16,12)" fill="#FFCC00">
        <circle cx="0" cy="-6" r="1" />
        <circle cx="3" cy="-5.2" r="1" />
        <circle cx="5.2" cy="-3" r="1" />
        <circle cx="6" cy="0" r="1" />
        <circle cx="5.2" cy="3" r="1" />
        <circle cx="3" cy="5.2" r="1" />
        <circle cx="0" cy="6" r="1" />
        <circle cx="-3" cy="5.2" r="1" />
        <circle cx="-5.2" cy="3" r="1" />
        <circle cx="-6" cy="0" r="1" />
        <circle cx="-5.2" cy="-3" r="1" />
        <circle cx="-3" cy="-5.2" r="1" />
      </g>
    </svg>
  );
}

export function ComplianceBadges() {
  const items = [
    { 
      icon: Shield, 
      title: "DSGVO 100%", 
      desc: "Verträge & AVV, Privacy by Design",
      flag: GermanFlag,
      certification: "Rechtssicher"
    },
    { 
      icon: CheckCircle, 
      title: "EU AI Act konform", 
      desc: "Transparenz, Logging, Human‑Oversight",
      flag: EUFlag,
      certification: "Zertifiziert"
    },
    {
      icon: N8nLogo,
      title: "n8n Automatisierung",
      desc: "Workflows & Voicebots, No-Code-Integration",
      flag: null,
      certification: "Ready"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => {
        const Icon = item.icon;
        const Flag = item.flag;
        
        return (
          <div 
            key={item.title} 
            className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* Flag in top right */}
            {Flag && (
              <div className="absolute top-4 right-4 opacity-80 group-hover:opacity-100 transition-opacity">
                <Flag />
              </div>
            )}
            
            <div className="flex items-start space-x-4">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <Icon size={24} className="text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-xs leading-relaxed mb-3">
                  {item.desc}
                </p>
                
                {/* Certification badge */}
                <div className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  {item.certification}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}


