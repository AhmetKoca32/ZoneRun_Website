var CACHE = 'zonerun-v4';

function isLocalhost() {
  try {
    return self.location.hostname === 'localhost' || self.location.hostname === '127.0.0.1';
  } catch (e) {
    return false;
  }
}

function install(e) {
  if (isLocalhost()) return;
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll([
        './',
        './index.html',
        './gizlilik.html',
        './privacy.html',
        './kullanim-kosullari.html',
        './terms.html',
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

/* Önce ağ: güncellemeler hemen görünsün, sadece offline’da cache kullanılsın */
function fetchHandler(e) {
  if (isLocalhost()) return;
  e.respondWith(
    fetch(e.request)
      .then(function (res) {
        if (res && res.status === 200 && res.url.indexOf('http') === 0) {
          var clone = res.clone();
          caches.open(CACHE).then(function (cache) { return cache.put(e.request, clone); });
        }
        return res;
      })
      .catch(function () {
        return caches.match(e.request);
      })
  );
}

self.addEventListener('install', install);
self.addEventListener('activate', function (e) {
  if (isLocalhost()) return;
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', fetchHandler);
