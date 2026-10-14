(function(){
  const stored = localStorage.getItem('theme');
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  let theme = stored || (prefersLight ? 'light' : 'dark');

  function setButtonLabel(){
    const btn = document.getElementById('theme-toggle');
    if(!btn) return;
    const next = (document.documentElement.getAttribute('data-theme') === 'light') ? 'dark' : 'light';
    const language = document.documentElement.lang;
    const labels = {
      en: { light: 'Light', dark: 'Dark', action: 'Switch to {theme} theme' },
      es: { light: 'Claro', dark: 'Oscuro', action: 'Cambiar al tema {theme}' },
      fr: { light: 'Clair', dark: 'Sombre', action: 'Passer au thème {theme}' }
    }[language] || { light: 'Light', dark: 'Dark', action: 'Switch to {theme} theme' };
    btn.textContent = (next === 'light' ? '☀︎ ' : '☾ ') + labels[next];
    btn.setAttribute('aria-label', labels.action.replace('{theme}', labels[next].toLowerCase()));
  }

  function apply(next){
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    setButtonLabel();
  }

  function ready(fn){ document.readyState==='loading' ? document.addEventListener('DOMContentLoaded', fn) : fn(); }

  ready(function(){
    apply(theme);
    const btn = document.getElementById('theme-toggle');
    if(btn){ btn.addEventListener('click', () => { theme = (theme==='light' ? 'dark' : 'light'); apply(theme); }); }

    const navTrigger = document.getElementById('nav-trigger');
    if(navTrigger){
      document.querySelectorAll('.site-nav .trigger a').forEach(link => {
        link.addEventListener('click', () => { navTrigger.checked = false; });
      });
      document.addEventListener('keydown', event => {
        if(event.key === 'Escape' && navTrigger.checked){
          navTrigger.checked = false;
          navTrigger.focus();
        }
      });
    }
  });
})();
