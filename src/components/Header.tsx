'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Leistungen', href: '/#features' },
    { label: 'Preise', href: '/preise' },
    { label: 'Lösungen', href: '/loesungen' },
    { label: 'Branchen', href: '/branchen' },
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Blog', href: '/blog' },
    { label: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/images/auroramedia-logo-black.png" 
              alt="AuroraMedia" 
              width={150} 
              height={150}
              className="w-38 h-38"
            />
            <div className="text-white">
              <div className="font-bold text-xl">AuroraMedia</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
                      </nav>

            {/* Compliance Logos */}
            <div className="hidden lg:flex items-center gap-3 mr-6">
              <Image 
                src="/images/dsgvo-konform.png" 
                alt="DSGVO-konform" 
                width={80} 
                height={25}
                className="shadow-sm"
              />
              <Image 
                src="/images/EUAIActlogo.png" 
                alt="EU AI Act" 
                width={80} 
                height={25}
                className="shadow-sm"
              />
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link href="/kontakt">
                <button className="px-6 py-2 bg-black text-white hover:bg-gray-800 rounded-full font-semibold transition-all duration-300">
                  Kostenloses Audit
                </button>
              </Link>
            </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="/kontakt">
                  <button className="w-full px-6 py-2 bg-white text-black hover:bg-gray-200 rounded-full font-semibold">
                    Kostenloses Audit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
