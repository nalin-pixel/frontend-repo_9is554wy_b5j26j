import React from 'react';

function Newsletter({ t, highContrast }) {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Simulated double opt-in: show a message to check inbox
    if (email.includes('@')) setSubmitted(true);
  };

  return (
    <section className={`mt-8 ${highContrast ? 'bg-black text-white' : 'bg-emerald-50'} border-t ${highContrast ? 'border-white/20' : 'border-emerald-100'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h3 className="text-xl font-semibold">{t('newsletter.title')}</h3>
        <p className={`${highContrast ? 'text-white/80' : 'text-gray-700'} mt-1`}>{t('newsletter.subtitle')}</p>

        {!submitted ? (
          <form onSubmit={onSubmit} className="mt-4 flex flex-col sm:flex-row gap-2">
            <label htmlFor="newsletter-email" className="sr-only">{t('newsletter.email')}</label>
            <input id="newsletter-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder={t('newsletter.emailPlaceholder')} className={`flex-1 px-4 py-2 rounded border ${highContrast ? 'bg-black border-white text-white placeholder-white/60' : 'bg-white border-gray-300 text-gray-700 placeholder-gray-400'}`} />
            <button type="submit" className={`px-4 py-2 rounded ${highContrast ? 'bg-white text-black' : 'bg-emerald-600 text-white'} font-medium`}>{t('newsletter.subscribe')}</button>
          </form>
        ) : (
          <p className="mt-3" role="status">{t('newsletter.confirmation')}</p>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
