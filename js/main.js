(function () {
  var STORAGE_KEY = 'zonerun-lang';
  var defaultLang = 'tr';

  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || defaultLang;
    } catch (e) {
      return defaultLang;
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    applyLang(lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'tr';
  }

  function applyLang(lang) {
    var attr = lang === 'en' ? 'data-en' : 'data-tr';
    document.querySelectorAll('[' + attr + ']').forEach(function (el) {
      var text = el.getAttribute(attr);
      if (text) el.textContent = text;
    });
    // Update aria-current for lang links
    document.querySelectorAll('.lang-nav a').forEach(function (a) {
      if (a.getAttribute('data-lang') === lang) {
        a.setAttribute('aria-current', 'page');
      } else {
        a.removeAttribute('aria-current');
      }
    });
  }

  // Init
  var current = getLang();
  applyLang(current);
  document.documentElement.lang = current === 'en' ? 'en' : 'tr';

  document.querySelectorAll('.lang-nav a[data-lang]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      setLang(a.getAttribute('data-lang'));
    });
  });
})();
