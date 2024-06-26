const CACHE_NAME = 'my-cache-v1';
const OFFLINE_URL = '/offline.html';

self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        OFFLINE_URL,
        '/', // Cache the root page
        // 其他要缓存的资源
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating Service Worker...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  console.log('[Service Worker] Fetching resource:', event.request.url);
  const requestURL = new URL(event.request.url);

  // Exclude CSS files from being cached
  if (requestURL.pathname.endsWith('.css') || requestURL.pathname.endsWith('.vue')) {
    event.respondWith(
      fetch(event.request)
      // .catch(() => {
      //   console.log(11111111111111111111111111111111111111111111);
      //   return caches.match(OFFLINE_URL);
      // })
    );
    return;
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(OFFLINE_URL);
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }

        if (requestURL.protocol === 'http:' || requestURL.protocol === 'https:') {
          return fetch(event.request).then((response) => {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, response.clone());
              return response;
            });
          });
        }

        return fetch(event.request);
      }).catch(() => {
        if (event.request.destination === 'image') {
          return new Response('<svg>...</svg>', { headers: { 'Content-Type': 'image/svg+xml' } });
        }
        return new Response('Network error occurred', { status: 408, headers: { 'Content-Type': 'text/plain' } });
      })
    );
  }
});
