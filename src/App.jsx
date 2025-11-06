import React from 'react';
import HeaderBar from './components/HeaderBar';
import HeroSection from './components/HeroSection';
import Explorer from './components/Explorer';
import ShopShowcase from './components/ShopShowcase';

const translations = {
  en: {
    siteTitle: 'Uttarakhand Cultural Hub',
    tagline: 'Stories, heritage, crafts, and communities',
    language: 'Language',
    accessibility: 'Accessibility',
    increaseFont: 'Increase font size',
    decreaseFont: 'Decrease font size',
    toggleContrast: 'Toggle high contrast',
    contrastOn: 'HC On',
    contrastOff: 'HC Off',
    search: 'Search',
    searchPlaceholder: 'Search the site…',
    searchDistrictVillage: 'Search districts or villages…',
    hero: {
      title: 'Experience the soul of Uttarakhand',
      subtitle:
        'A living archive of people, places, food, festivals and crafts. Explore districts and villages, support artisans, and keep heritage alive.',
      explore: 'Explore Districts',
      shop: 'Shop Handicrafts',
    },
    explorer: {
      title: 'District & Village Explorer',
      subtitle: 'Discover stories, recipes, songs, and rituals at the grassroots.',
      viewCulture: 'View culture',
    },
    shop: {
      title: 'Handicrafts Marketplace',
      subtitle: 'Ethically sourced crafts directly from Uttarakhand artisans.',
      viewAll: 'View all',
      addToCart: 'Add to cart',
    },
    newsletter: {
      title: 'Join our Newsletter',
      subtitle: 'Get monthly stories, events, and artisan spotlights. Double opt‑in for your privacy.',
      email: 'Email address',
      emailPlaceholder: 'you@example.com',
      subscribe: 'Subscribe',
      confirmation: 'Please check your inbox to confirm your subscription.',
    },
    metaTitle: 'Uttarakhand Cultural Hub — Stories, Crafts, Communities',
    metaDescription:
      'A modern, multilingual cultural hub for Uttarakhand: storytelling, district & village explorer, artisan marketplace, and community engagement.',
  },
  hi: {
    siteTitle: 'उत्तराखंड सांस्कृतिक हब',
    tagline: 'कहानियाँ, धरोहर, शिल्प और समुदाय',
    language: 'भाषा',
    accessibility: 'सुगम्यता',
    increaseFont: 'फ़ॉन्ट आकार बढ़ाएँ',
    decreaseFont: 'फ़ॉन्ट आकार घटाएँ',
    toggleContrast: 'उच्च कॉन्ट्रास्ट',
    contrastOn: 'उच्च-प्र चालू',
    contrastOff: 'उच्च-प्र बंद',
    search: 'खोजें',
    searchPlaceholder: 'साइट पर खोजें…',
    searchDistrictVillage: 'ज़िले या गाँव खोजें…',
    hero: {
      title: 'महसूस करें उत्तराखंड की आत्मा',
      subtitle:
        'लोगों, स्थानों, भोजन, त्योहारों और शिल्पों का जीवंत संग्रह। जिलों और गाँवों को खोजें, कारीगरों का साथ दें और धरोहर को जीवित रखें।',
      explore: 'जिलों को देखें',
      shop: 'हस्तशिल्प खरीदें',
    },
    explorer: {
      title: 'जिला और गाँव एक्सप्लोरर',
      subtitle: 'ज़मीनी स्तर पर लोककथाएँ, व्यंजन, गीत और रीति-रिवाज खोजें।',
      viewCulture: 'विरासत देखें',
    },
    shop: {
      title: 'हस्तशिल्प बाज़ार',
      subtitle: 'उत्तराखंड के कारीगरों से सीधे नैतिक उत्पाद।',
      viewAll: 'सभी देखें',
      addToCart: 'कार्ट में जोड़ें',
    },
    newsletter: {
      title: 'हमारे न्यूज़लेटर से जुड़ें',
      subtitle: 'मासिक कहानियाँ, आयोजन और कारीगर विशेषांक। आपकी गोपनीयता हेतु डबल ऑप्ट‑इन।',
      email: 'ईमेल पता',
      emailPlaceholder: 'you@example.com',
      subscribe: 'सदस्य बनें',
      confirmation: 'कृपया अपनी सदस्यता की पुष्टि के लिए इनबॉक्स देखें।',
    },
    metaTitle: 'उत्तराखंड सांस्कृतिक हब — कहानियाँ, शिल्प, समुदाय',
    metaDescription:
      'उत्तराखंड के लिए आधुनिक, बहुभाषी सांस्कृतिक हब: स्टोरीटेलिंग, जिला/गाँव एक्सप्लोरर, कारीगर मार्केटप्लेस और समुदाय।',
  },
};

export default function App() {
  const [lang, setLang] = React.useState('en');
  const [highContrast, setHighContrast] = React.useState(false);
  const [fontSizeLevel, setFontSizeLevel] = React.useState(0); // 0,1,2

  const t = React.useCallback(
    (key) => {
      const dict = translations[lang];
      const parts = key.split('.');
      let cur = dict;
      for (const p of parts) {
        cur = cur?.[p];
      }
      return cur ?? key;
    },
    [lang]
  );

  React.useEffect(() => {
    document.title = t('metaTitle');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('metaDescription'));
  }, [lang, t]);

  const scale = fontSizeLevel === 0 ? 1 : fontSizeLevel === 1 ? 1.1 : 1.25;

  const onGlobalSearch = (q) => {
    if (!q) return;
    // naive client-side search demo: jump to explorer
    const el = document.getElementById('explorer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`${highContrast ? 'bg-black' : 'bg-white'} min-h-screen`} style={{ fontSize: `${16 * scale}px` }}>
      <a href="#main" className={`sr-only focus:not-sr-only focus:inline-block focus:absolute focus:top-2 focus:left-2 px-3 py-2 rounded ${highContrast ? 'bg-white text-black' : 'bg-emerald-600 text-white'}`}>Skip to content</a>

      <HeaderBar
        t={t}
        lang={lang}
        setLang={setLang}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        fontSizeLevel={fontSizeLevel}
        setFontSizeLevel={setFontSizeLevel}
        onGlobalSearch={onGlobalSearch}
      />

      <main id="main" className={`${highContrast ? 'text-white' : 'text-gray-900'}`}>
        <HeroSection t={t} highContrast={highContrast} />
        <Explorer t={t} highContrast={highContrast} />
        <ShopShowcase t={t} highContrast={highContrast} />
      </main>

      <footer className={`mt-10 ${highContrast ? 'border-white/20 text-white' : 'border-gray-200 text-gray-600'} border-t`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Uttarakhand Cultural Hub</p>
          <div className="flex items-center gap-4">
            <a href="#" className={`${highContrast ? 'text-white' : 'text-emerald-700'} underline`}>Privacy</a>
            <a href="#" className={`${highContrast ? 'text-white' : 'text-emerald-700'} underline`}>Cookies</a>
            <a href="#" className={`${highContrast ? 'text-white' : 'text-emerald-700'} underline`}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
