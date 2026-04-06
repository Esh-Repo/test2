// A minimal service worker to satisfy Chrome's PWA install requirements
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installed');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activated');
});

self.addEventListener('fetch', (event) => {
    // Just lets network requests pass through normally
    event.respondWith(fetch(event.request));
});