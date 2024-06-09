// public/sw.js

const CACHE_NAME = 'my-cache-v1';
const OFFLINE_URL = '/offline.html';

self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        OFFLINE_URL,
        // 其他要缓存的资源
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating Service Worker...');
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.open(CACHE_NAME).then((cache) => {
          return cache.match(OFFLINE_URL);
        });
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request).then((response) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      }).catch(() => {
        if (event.request.destination === 'image') {
          return new Response('<svg>...</svg>', { headers: { 'Content-Type': 'image/svg+xml' } });
        }
        return new Response('Network error occurred', { status: 408, headers: { 'Content-Type': 'text/plain' } });
      })
    );
  }
});


// // public/sw.js
// self.addEventListener('install', (event) => {
//   // console.log('[Service Worker] Installing Service Worker...');
//   self.skipWaiting();
// });

// self.addEventListener('activate', (event) => {
//   // console.log('[Service Worker] Activating Service Worker...');
//   event.waitUntil(clients.claim());
// });

// self.addEventListener('fetch', (event) => {
//   // console.log('[Service Worker] Fetching resource:', event.request.url);
//   event.respondWith(
//     caches.open('dynamic-cache').then((cache) => {
//       return cache.match(event.request).then((response) => {
//         return response || fetch(event.request).then((response) => {
//           cache.put(event.request, response.clone());
//           return response;
//         });
//       });
//     })
//   );
// });
