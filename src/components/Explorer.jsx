import React from 'react';

// Simple district & village explorer skeleton (no external map libs to avoid extra deps)
const demoData = [
  {
    district: 'Pauri Garhwal',
    villages: ['Khirsu', 'Srinagar', 'Kotdwara']
  },
  {
    district: 'Chamoli',
    villages: ['Joshimath', 'Auli', 'Gopeshwar']
  },
  {
    district: 'Nainital',
    villages: ['Bhowali', 'Bhimtal', 'Ramgarh']
  }
];

function Explorer({ t, highContrast }) {
  const [query, setQuery] = React.useState('');

  const filtered = demoData.map(d => ({
    ...d,
    villages: d.villages.filter(v => v.toLowerCase().includes(query.toLowerCase()))
  })).filter(d => d.district.toLowerCase().includes(query.toLowerCase()) || d.villages.length > 0);

  return (
    <section id="explorer" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className={`text-2xl sm:text-3xl font-bold ${highContrast ? 'text-white' : 'text-gray-900'}`}>{t('explorer.title')}</h2>
          <p className={`${highContrast ? 'text-white/80' : 'text-gray-600'} mt-1`}>{t('explorer.subtitle')}</p>
        </div>
        <div className="w-40 sm:w-64">
          <label className="sr-only" htmlFor="explorer-search">{t('search')}</label>
          <input id="explorer-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t('searchDistrictVillage')} className={`w-full px-3 py-2 rounded border ${highContrast ? 'bg-black border-white text-white placeholder-white/60' : 'bg-white border-gray-300 text-gray-700 placeholder-gray-400'}`} />
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((d) => (
          <div key={d.district} className={`rounded-lg p-4 ${highContrast ? 'bg-black border border-white/30 text-white' : 'bg-white border border-gray-200'} shadow-sm`}>
            <h3 className="font-semibold text-lg">{d.district}</h3>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              {(d.villages.length ? d.villages : ['—']).map(v => (
                <li key={v} className={`${highContrast ? 'text-white/90' : 'text-gray-700'}`}>{v}</li>
              ))}
            </ul>
            <button className={`mt-3 inline-flex items-center px-3 py-1.5 rounded text-sm ${highContrast ? 'bg-white text-black' : 'bg-emerald-600 text-white'} hover:opacity-90`}>{t('explorer.viewCulture')}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Explorer;
