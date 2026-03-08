// sw.js
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    const { title, body } = event.data;
    
    self.registration.showNotification(title, {
      body: body,
      icon: 'https://picsum.photos/id/1015/200/200',
      badge: 'https://picsum.photos/id/1015/100/100',
      tag: 'weather-update',     // ← this replaces the previous notification instead of stacking
      vibrate: [200, 100, 200]
    });
  }
});

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
