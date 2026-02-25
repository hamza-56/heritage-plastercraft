const CACHE = "heritage-plastercraft-v1";

const PRECACHE = [
  "/",
  "/index.html",
  "/bio.html",
  "/portfolio.html",
  "/services.html",
  "/contact.html",
  "/terms.html",
  "/privacy.html",
  "/css/global.css",
  "/css/home.css",
  "/css/bio.css",
  "/css/portfolio.css",
  "/css/services.css",
  "/css/contact.css",
  "/css/terms.css",
  "/js/global.js",
  "/js/home.js",
  "/js/contact.js",
  "/js/portfolio.js",
  "/images/logo.png",
  "/images/android-chrome-192x192.png",
  "/images/android-chrome-512x512.png",
  "/images/favicon.ico",
  "/manifest.json",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)),
        ),
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  // Only handle GET requests for same-origin or cdn resources
  if (e.request.method !== "GET") return;

  e.respondWith(
    caches.match(e.request).then((cached) => {
      const network = fetch(e.request).then((res) => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, clone));
        }
        return res;
      });
      return cached || network;
    }),
  );
});
