import React from 'react';

const products = [
  { id: 1, name: 'Pahadi Wool Shawl', price: '₹2,499', img: 'https://images.unsplash.com/photo-1582582429416-2bfdbbc1c167?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'Copperware Lotaa', price: '₹1,299', img: 'https://images.unsplash.com/photo-1577382144834-60f70c9a5b3b?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Ringaal Bamboo Basket', price: '₹899', img: 'https://images.unsplash.com/photo-1545302747-4e712f7a81a3?q=80&w=800&auto=format&fit=crop' },
  { id: 4, name: 'Aipan Art Panel', price: '₹1,799', img: 'https://images.unsplash.com/photo-1603575448898-4958e7d96de2?q=80&w=800&auto=format&fit=crop' },
];

function ShopShowcase({ t, highContrast }) {
  return (
    <section id="shop" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex items-end justify-between">
        <div>
          <h2 className={`text-2xl sm:text-3xl font-bold ${highContrast ? 'text-white' : 'text-gray-900'}`}>{t('shop.title')}</h2>
          <p className={`${highContrast ? 'text-white/80' : 'text-gray-600'} mt-1`}>{t('shop.subtitle')}</p>
        </div>
        <a href="#" className={`text-sm ${highContrast ? 'text-white' : 'text-emerald-700'} underline`}>{t('shop.viewAll')}</a>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map(p => (
          <div key={p.id} className={`rounded-lg overflow-hidden border ${highContrast ? 'border-white/30 bg-black' : 'border-gray-200 bg-white'} shadow-sm`}>
            <img src={p.img} alt={p.name} className="h-36 w-full object-cover" />
            <div className="p-3">
              <h3 className={`font-medium text-sm ${highContrast ? 'text-white' : 'text-gray-900'}`}>{p.name}</h3>
              <p className={`text-sm mt-1 ${highContrast ? 'text-white/80' : 'text-gray-600'}`}>{p.price}</p>
              <button className={`mt-3 w-full px-3 py-2 rounded text-sm ${highContrast ? 'bg-white text-black' : 'bg-emerald-600 text-white'} hover:opacity-90`}>
                {t('shop.addToCart')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShopShowcase;
