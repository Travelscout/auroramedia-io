'use client';

import React, { useEffect, useState } from 'react';

interface NeuralBackgroundProps {
  className?: string;
}

const NeuralBackground: React.FC<NeuralBackgroundProps> = ({ className = '' }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-80 ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.1),transparent_50%)]" />
      </div>
    );
  }

  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 4 + Math.random() * 3,
  }));

  const lines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 90,
    y: Math.random() * 90,
    rotation: Math.random() * 360,
    delay: Math.random() * 3,
  }));

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 10 + Math.random() * 20,
  }));

  if (prefersReducedMotion) {
    return (
      <div className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-80 ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.1),transparent_50%)]" />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Neural Network Nodes */}
      <div className="absolute inset-0 opacity-30">
        {nodes.map((node) => (
          <div
            key={node.id}
            className="absolute w-2 h-2 neural-node"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              animationDelay: `${node.delay}s`,
              animationDuration: `${node.duration}s`,
            }}
          >
            <div className="w-full h-full bg-blue-400 rounded-full shadow-[0_0_20px_#3b82f6] node-core" />
            <div className="absolute -top-1/2 -left-1/2 w-4 h-4 bg-blue-400/30 rounded-full node-pulse" />
          </div>
        ))}

        {/* Connection Lines */}
        {lines.map((line) => (
          <div
            key={line.id}
            className="absolute w-24 h-px connection-line"
            style={{
              left: `${line.x}%`,
              top: `${line.y}%`,
              transform: `rotate(${line.rotation}deg)`,
              animationDelay: `${line.delay}s`,
              background: 'linear-gradient(90deg, transparent 0%, rgba(96, 165, 250, 0.5) 20%, rgba(147, 51, 234, 0.5) 80%, transparent 100%)',
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full floating-particle"
            style={{
              left: `${particle.x}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NeuralBackground;
