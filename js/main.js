(function () {
  var STORAGE_KEY = 'zonerun-lang';
  var THEME_KEY = 'zonerun-theme';
  var defaultLang = 'tr';

  if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(function () {});
  }

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
    document.querySelectorAll('img[data-alt-tr]').forEach(function (img) {
      var alt = lang === 'en' ? img.getAttribute('data-alt-en') : img.getAttribute('data-alt-tr');
      if (alt) img.alt = alt;
    });
    document.querySelectorAll('.lang-nav a[data-lang]').forEach(function (a) {
      if (a.getAttribute('data-lang') === lang) {
        a.setAttribute('aria-current', 'page');
      } else {
        a.removeAttribute('aria-current');
      }
    });
    var footerLangLinks = document.querySelectorAll('.site-footer a[data-lang]');
    footerLangLinks.forEach(function (a) {
      if (a.getAttribute('data-lang') === lang) {
        a.setAttribute('aria-current', 'page');
      } else {
        a.removeAttribute('aria-current');
      }
    });
  }

  // Theme
  function getTheme() {
    try {
      return localStorage.getItem(THEME_KEY) || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } catch (e) {
      return 'light';
    }
  }

  function setTheme(theme) {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {}
    document.body.setAttribute('data-theme', theme);
    var label = document.getElementById('theme-toggle');
    if (label) label.setAttribute('aria-label', theme === 'dark' ? 'Açık tema' : 'Karanlık tema');
  }

  // Init lang
  var current = getLang();
  applyLang(current);
  document.documentElement.lang = current === 'en' ? 'en' : 'tr';

  document.querySelectorAll('.lang-nav a[data-lang]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      setLang(a.getAttribute('data-lang'));
    });
  });

  document.querySelectorAll('.site-footer a[data-lang]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      setLang(a.getAttribute('data-lang'));
    });
  });

  // Init theme
  setTheme(getTheme());

  var themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      setTheme(document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  // Year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Screenshot slider
  var track = document.getElementById('screenshot-track');
  var dotsEl = document.getElementById('slider-dots');
  if (track && dotsEl) {
    var slides = track.querySelectorAll('.screenshot-slide');
    var n = slides.length;
    for (var i = 0; i < n; i++) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Slide ' + (i + 1));
      if (i === 0) btn.classList.add('active');
      btn.addEventListener('click', function (idx) {
        var slide = slides[idx];
        if (slide) slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        dotsEl.querySelectorAll('button').forEach(function (b, j) { b.classList.toggle('active', j === idx); });
      }.bind(null, i));
      dotsEl.appendChild(btn);
    }
    track.addEventListener('scroll', function () {
      var idx = Math.round(track.scrollLeft / (track.scrollWidth / n));
      dotsEl.querySelectorAll('button').forEach(function (b, j) { b.classList.toggle('active', j === idx); });
    });
  }

  var prevBtn = document.getElementById('slider-prev');
  var nextBtn = document.getElementById('slider-next');
  if (prevBtn && track) {
    prevBtn.addEventListener('click', function () {
      var w = track.querySelector('.screenshot-slide').offsetWidth;
      track.scrollBy({ left: -w, behavior: 'smooth' });
    });
  }
  if (nextBtn && track) {
    nextBtn.addEventListener('click', function () {
      var w = track.querySelector('.screenshot-slide').offsetWidth;
      track.scrollBy({ left: w, behavior: 'smooth' });
    });
  }
})();
