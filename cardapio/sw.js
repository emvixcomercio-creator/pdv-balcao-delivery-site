// 11/11 (Edson: "o cliente colocaria na tela inicial dele e ficaria bom"): o mínimo para o Android oferecer "Instalar"
// o cardápio (vira um ícone na tela de início). Não guarda nada: sempre busca na internet.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
