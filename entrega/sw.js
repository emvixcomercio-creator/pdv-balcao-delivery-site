// 04/11 (Edson: "essa tela do entregador ficasse na tela igual um aplicativo"): o celular só oferece "Instalar aplicativo"
// com um service worker. Não guarda nada: tudo vem da internet (a entrega muda a toda hora).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => e.respondWith(fetch(e.request)));
