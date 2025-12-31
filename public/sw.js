// public/sw.js
const CACHE_NAME = 'daily-classical-v1';

// Cuando se instala, guardamos lo básico
self.addEventListener('install', (e) => {
  e.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                    '/',
                            '/index.html',
                                    '/icon.png',
                                            '/manifest.json'
                                                  ]);
                                                      })
                                                        );
                                                        });

                                                        // Cuando pide recursos, intentamos servir desde caché
                                                        self.addEventListener('fetch', (e) => {
                                                          e.respondWith(
                                                              caches.match(e.request).then((response) => {
                                                                    return response || fetch(e.request);
                                                                        })
                                                                          );
                                                                          })