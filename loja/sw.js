// 27/10 (Edson: "conseguimos colocar automaticamente na tela de início do celular?"): o mínimo para o Android oferecer
// "Instalar" (a página de Minha loja vira um ícone na tela de início). Não guarda nada: sempre busca na internet.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
