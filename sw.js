var CACHE = 'zonerun-v2';

function install(e) {
  e.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll([
        './',
        './index.html',
        './gizlilik.html',
        './privacy.html',
        './css/style.css',
        './js/main.js',
        './images/icon.svg',
        './images/Main_Logo.jpg',
        './images/Map_Page.png',
        './images/Home_Page.png',
        './images/History_Page.png',
        './images/Profile_Page.png',
        './images/Share_Preview.png',
        './manifest.json'
      ]).catch(function () {});
    })
  );
}

function fetchHandler(e) {
  e.respondWith(
    caches.match(e.request).then(function (cached) {
      if (cached) return cached;
      return fetch(e.request).then(function (res) {
        if (res && res.status === 200 && res.url.indexOf('http') === 0) {
          var clone = res.clone();
          caches.open(CACHE).then(function (cache) { return cache.put(e.request, clone); });
        }
        return res;
      });
    })
  );
}

self.addEventListener('install', install);
self.addEventListener('fetch', fetchHandler);
