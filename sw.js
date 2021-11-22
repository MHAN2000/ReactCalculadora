const CACHE_ELEMENTS = [
    "./",
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "css/style.css",
    "components/Calculadora.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
]

const CACHE_NAME = "v1_cache_calc_react"

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(CACHE_ELEMENTS).then(() => {
                self.skipWaiting()
            }).catch(console.log);
        })
    );
});

self.addEventListener("activate", (e) => {

    const cacheWhitelist = [CACHE_NAME];

    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(cacheNames.map((cacheName) => {
                return (
                    cacheWhitelist.indexOf(cacheName) === -1 && caches.delete(cacheName)
                );
            }));
        }).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => res ? res : fetch(e.request))
    )
});