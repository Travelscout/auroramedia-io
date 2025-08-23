'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        
        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </h2>
            <p className="text-gray-400 text-lg">
              Entdecken Sie unsere neuesten Projekte und Erfolgsgeschichten
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Über uns
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Wir sind ein innovatives Team aus Düsseldorf, das modernste KI-Technologien 
              mit erstklassigem Webdesign verbindet.
            </p>
          </div>
        </section>

        <CTASection />
      </main>
    </>
  );
}
