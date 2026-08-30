const VERSION = 'exam-planner-v2';
const CACHE = VERSION;
const CORE = ['./', './index.html', './style.css', './script.js', './manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(CORE.map(async (url) => {
      try { const res = await fetch(url); if (res.ok) await cache.put(url, res); } catch {}
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== location.origin) return;

  if (url.pathname.endsWith('/script.js') || url.pathname.endsWith('/style.css') || url.pathname.endsWith('/index.html')) {
    event.respondWith(caches.match(event.request).then((hit) => hit || fetch(event.request).then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(event.request, copy)); return res; })));
    return;
  }

  event.respondWith(fetch(event.request).then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(event.request, copy)); return res; }).catch(() => caches.match(event.request)));
});
