// public/sw.js
self.addEventListener('install', (event) => {
  // console.log('[Service Worker] Installing Service Worker...');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // console.log('[Service Worker] Activating Service Worker...');
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // console.log('[Service Worker] Fetching resource:', event.request.url);
  event.respondWith(
    caches.open('dynamic-cache').then((cache) => {
      return cache.match(event.request).then((response) => {
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
