import React from 'react';

function HeaderBar({ t, lang, setLang, highContrast, setHighContrast, fontSizeLevel, setFontSizeLevel, onGlobalSearch }) {
  const increaseFont = () => setFontSizeLevel((v) => Math.min(2, v + 1));
  const decreaseFont = () => setFontSizeLevel((v) => Math.max(0, v - 1));

  return (
    <header className={`${highContrast ? 'bg-black text-white' : 'bg-white/80 backdrop-blur'} sticky top-0 z-50 border-b ${highContrast ? 'border-white/20' : 'border-gray-200'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold ${highContrast ? 'bg-white text-black' : 'bg-emerald-600 text-white'}`} aria-label={t('siteTitle')}>
            UK
          </div>
          <div>
            <p className="font-semibold leading-tight">{t('siteTitle')}</p>
            <p className={`text-xs ${highContrast ? 'text-white/80' : 'text-gray-500'}`}>{t('tagline')}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-1" aria-label={t('language')}>
            <button onClick={() => setLang('en')} className={`px-2 py-1 rounded text-sm border ${lang === 'en' ? (highContrast ? 'bg-white text-black' : 'bg-emerald-600 text-white border-emerald-600') : (highContrast ? 'border-white text-white' : 'border-gray-300 text-gray-700')}`}>
              EN
            </button>
            <button onClick={() => setLang('hi')} className={`px-2 py-1 rounded text-sm border ${lang === 'hi' ? (highContrast ? 'bg-white text-black' : 'bg-emerald-600 text-white border-emerald-600') : (highContrast ? 'border-white text-white' : 'border-gray-300 text-gray-700')}`}>
              हिन्दी
            </button>
          </div>

          <div className="flex items-center gap-1" aria-label={t('accessibility')}>
            <button onClick={decreaseFont} className={`px-2 py-1 rounded text-sm border ${highContrast ? 'border-white text-white' : 'border-gray-300 text-gray-700'}`} aria-label={t('decreaseFont')}>
              A-
            </button>
            <button onClick={increaseFont} className={`px-2 py-1 rounded text-sm border ${highContrast ? 'border-white text-white' : 'border-gray-300 text-gray-700'}`} aria-label={t('increaseFont')}>
              A+
            </button>
            <button onClick={() => setHighContrast(!highContrast)} className={`px-2 py-1 rounded text-sm border ${highContrast ? 'bg-white text-black' : 'border-gray-300 text-gray-700'}`} aria-pressed={highContrast} aria-label={t('toggleContrast')}>
              {highContrast ? t('contrastOn') : t('contrastOff')}
            </button>
          </div>

          <div className="hidden sm:flex items-center">
            <form onSubmit={(e) => { e.preventDefault(); const q = new FormData(e.currentTarget).get('q'); onGlobalSearch(String(q || '')); }}>
              <label className="sr-only" htmlFor="global-search">{t('search')}</label>
              <input id="global-search" name="q" type="search" placeholder={t('searchPlaceholder')} className={`px-3 py-2 rounded-l border ${highContrast ? 'bg-black border-white text-white placeholder-white/60' : 'bg-white border-gray-300 text-gray-700 placeholder-gray-400'} w-40 md:w-64`} />
              <button type="submit" className={`px-3 py-2 rounded-r border-l-0 ${highContrast ? 'bg-white text-black border-white' : 'bg-emerald-600 text-white border-emerald-600'}`}>{t('search')}</button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderBar;
