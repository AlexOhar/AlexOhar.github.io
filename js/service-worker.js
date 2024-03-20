// Имя кеша
const CACHE_NAME = 'my-cache';
// Список URL-адресов для кеширования
const urlsToCache = [
  '/',
  '/css/style.min.css',
  '/js/home.js',
  '/js/modules.js',
//   '/js/script.js'
];

self.addEventListener('install', function(event) {
  // Выполняется при установке сервис-воркера
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.open('my-cache').then(function(cache) {
        return cache.match(event.request).then(function(response) {
          if (response) {
            return response;
          } else {
            return fetch(event.request).then(function(networkResponse) {
              if (event.request.url.includes('/img/')) {
                cache.put(event.request, networkResponse.clone());
              }
              return networkResponse;
            });
          }
        });
      })
    );
});