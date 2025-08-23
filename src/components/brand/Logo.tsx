import React from "react";

type Props = {
  size?: number;
  className?: string;
};

export function AuroraLogo({ size = 32, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AuroraMedia Logo"
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="60%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <path
        d="M32 4c2.4 5.6 7.5 8.6 14.4 9.6-3.1 3.7-3.1 9.1 0 14.8-6.9 1-12 4-14.4 9.6-2.4-5.6-7.5-8.6-14.4-9.6 3.1-5.7 3.1-11.1 0-14.8C24.5 12.6 29.6 9.6 32 4z"
        fill="url(#g1)"
      />
      <circle cx="32" cy="32" r="5.5" fill="#0f172a" opacity="0.1" />
      <circle cx="32" cy="32" r="3.5" fill="#fff" />
    </svg>
  );
}

export function AuroraBadgeShape({ size = 20, className }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id="gb" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="60%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <path d="M32 6c3 6 8 9 15 10-3 4-3 9 0 14-7 1-12 4-15 10-3-6-8-9-15-10 3-5 3-10 0-14 7-1 12-4 15-10z" fill="url(#gb)"/>
    </svg>
  );
}

export function PrivacyIcon({ size = 20, className }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id="dsgvoFlag" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="33%" stopColor="#DD0000" />
          <stop offset="66%" stopColor="#FFCE00" />
          <stop offset="100%" stopColor="#FFCE00" />
        </linearGradient>
        <filter id="flagShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#000000" floodOpacity="0.2"/>
        </filter>
      </defs>
      
      {/* Flaggenmast */}
      <rect x="6" y="6" width="2" height="52" fill="#8B4513" />
      
      {/* Deutsche Flagge für DSGVO */}
      <rect x="8" y="12" width="48" height="32" rx="2" fill="url(#dsgvoFlag)" filter="url(#flagShadow)" />
      
      {/* Flaggen-Streifen */}
      <rect x="8" y="12" width="48" height="10.67" fill="#000000" />
      <rect x="8" y="22.67" width="48" height="10.67" fill="#DD0000" />
      <rect x="8" y="33.33" width="48" height="10.67" fill="#FFCE00" />
      
      {/* DSGVO Schild */}
      <g transform="translate(32,28)">
        <circle r="12" fill="rgba(255,255,255,0.95)" />
        <path d="M-8,-6 L8,-6 L8,4 C8,8 4,12 0,12 C-4,12 -8,8 -8,4 Z" 
              fill="#10b981" stroke="#059669" strokeWidth="1" />
        <text x="0" y="1" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">§</text>
      </g>
      
      {/* Wind-Effekt */}
      <path d="M56 16 Q58 17 56 18 Q58 19 56 20 Q58 21 56 22" 
            stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function EuAiIcon({ size = 20, className }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <filter id="euFlagShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#000000" floodOpacity="0.2"/>
        </filter>
      </defs>
      
      {/* Flaggenmast */}
      <rect x="6" y="6" width="2" height="52" fill="#8B4513" />
      
      {/* EU-Flagge */}
      <rect x="8" y="12" width="48" height="32" rx="2" fill="#003399" filter="url(#euFlagShadow)" />
      
      {/* EU-Sterne im Kreis (12 Sterne) */}
      <g transform="translate(32,28)" fill="#FFCC00">
        <circle cx="0" cy="-10" r="1.5" />
        <circle cx="5" cy="-8.66" r="1.5" />
        <circle cx="8.66" cy="-5" r="1.5" />
        <circle cx="10" cy="0" r="1.5" />
        <circle cx="8.66" cy="5" r="1.5" />
        <circle cx="5" cy="8.66" r="1.5" />
        <circle cx="0" cy="10" r="1.5" />
        <circle cx="-5" cy="8.66" r="1.5" />
        <circle cx="-8.66" cy="5" r="1.5" />
        <circle cx="-10" cy="0" r="1.5" />
        <circle cx="-8.66" cy="-5" r="1.5" />
        <circle cx="-5" cy="-8.66" r="1.5" />
      </g>
      
      {/* AI Act Symbol im Zentrum */}
      <g transform="translate(32,28)">
        <circle r="8" fill="rgba(255,204,0,0.3)" stroke="#FFCC00" strokeWidth="1" />
        <text x="0" y="-1" textAnchor="middle" fontSize="7" fill="#FFCC00" fontWeight="bold">AI</text>
        <text x="0" y="6" textAnchor="middle" fontSize="4" fill="#FFCC00" fontWeight="normal">ACT</text>
      </g>
      
      {/* Wind-Effekt */}
      <path d="M56 16 Q58 17 56 18 Q58 19 56 20 Q58 21 56 22 Q58 23 56 24" 
            stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}


