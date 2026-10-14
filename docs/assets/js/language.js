(function () {
  const script = document.currentScript;
  if (!script) return;

  const routes = {
    en: script.dataset.en,
    es: script.dataset.es,
    fr: script.dataset.fr
  };
  const storageKey = 'portfolio-language';

  function supported(language) {
    return Object.prototype.hasOwnProperty.call(routes, language);
  }

  function savedLanguage() {
    try {
      const value = localStorage.getItem(storageKey);
      return supported(value) ? value : null;
    } catch (_) {
      return null;
    }
  }

  function rememberLanguage(language) {
    if (!supported(language)) return;
    try { localStorage.setItem(storageKey, language); } catch (_) { /* Storage may be disabled. */ }
  }

  function detectedLanguage() {
    const preferences = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || 'en'];

    // Respect the visitor's ordered language preferences before using a region hint.
    for (const preference of preferences) {
      const language = String(preference).toLowerCase().split(/[-_]/)[0];
      if (supported(language)) return language;
    }

    const region = String(preferences[0]).toUpperCase().split(/[-_]/).slice(1).find(part => part.length === 2);
    if (region === 'FR') return 'fr';
    if (['AR', 'BO', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'ES', 'GT', 'HN', 'MX', 'NI', 'PA', 'PE', 'PR', 'PY', 'SV', 'UY', 'VE'].includes(region)) return 'es';
    return 'en';
  }

  // Auto-select only at the default homepage; explicit language URLs remain stable.
  if (location.pathname === routes.en) {
    const explicitEnglish = new URLSearchParams(location.search).get('lang') === 'en';
    if (explicitEnglish) rememberLanguage('en');
    const language = explicitEnglish ? 'en' : (savedLanguage() || detectedLanguage());
    if (language !== 'en') location.replace(routes[language] + location.search + location.hash);
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a.language-toggle[hreflang]').forEach(function (link) {
      link.addEventListener('click', function () { rememberLanguage(link.hreflang); });
    });
  });
})();
