/* UG Luffy — service worker: cache-first con precache della shell e runtime cache per immagini */
const V = "ug-luffy-v2";
const CORE = [
  "./", "index.html", "manifest.webmanifest",
  "data/sources.js", "data/cards.js", "data/meta.js", "data/decklists.js", "data/tech.js",
  "data/fond.js", "data/mu-mirror-teach.js", "data/mu-nami-enel.js",
  "data/mu-rosinante-yamato.js", "data/mu-field.js", "data/bigini.js", "data/glossario.js"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(V)
      .then(c => Promise.allSettled(CORE.map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  // shell (html/js/json): network-first così gli aggiornamenti arrivano subito, fallback cache offline
  const isShell = /\.(html|js|webmanifest)$/.test(url.pathname) || url.pathname.endsWith("/");
  if (isShell) {
    e.respondWith(
      fetch(e.request).then(r => {
        if (r.ok) { const cl = r.clone(); caches.open(V).then(c => c.put(e.request, cl)); }
        return r;
      }).catch(() => caches.match(e.request))
    );
  } else {
    // asset (immagini): cache-first
    e.respondWith(
      caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
        if (r.ok) { const cl = r.clone(); caches.open(V).then(c => c.put(e.request, cl)); }
        return r;
      }))
    );
  }
});
