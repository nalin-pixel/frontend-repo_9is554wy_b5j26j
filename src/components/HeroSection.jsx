import React from 'react';
import { ArrowRight } from 'lucide-react';

function HeroSection({ t, highContrast }) {
  return (
    <section className="relative">
      <div className={`absolute inset-0 ${highContrast ? 'bg-black' : 'bg-gradient-to-b from-emerald-50 via-white to-white'} pointer-events-none`} aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-14 sm:pt-16 sm:pb-20">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${highContrast ? 'text-white' : 'text-gray-900'}`}>
          {t('hero.title')}
        </h1>
        <p className={`mt-4 text-base sm:text-lg md:text-xl max-w-2xl ${highContrast ? 'text-white/90' : 'text-gray-600'}`}>
          {t('hero.subtitle')}
        </p>
        <div className="mt-6 flex gap-3">
          <a href="#explorer" className={`inline-flex items-center gap-2 px-4 py-2 rounded-md ${highContrast ? 'bg-white text-black' : 'bg-emerald-600 text-white'} shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500`}>
            {t('hero.explore')}
            <ArrowRight size={18} />
          </a>
          <a href="#shop" className={`inline-flex items-center gap-2 px-4 py-2 rounded-md ${highContrast ? 'bg-black text-white border border-white' : 'bg-white text-gray-900 border border-gray-300'} shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500`}>
            {t('hero.shop')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
