/* eslint-env serviceworker */
self.addEventListener('install', function (event) {
  self.skipWaiting()
  sendMessage(event, 'render')
})

self.addEventListener('activate', function (event) {
  sendMessage(event, 'render')
})

self.addEventListener('sync', function (event) {
  sendMessage(event, 'render')
  self.registration.showNotification(event.tag)
})
self.onmessage = function (e) {
  if (e.data === 'ping') {
    sendMessage(e, 'Message sent from the service worker')
  } else {
    self.registration.showNotification(e.data)
  }
}
self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).then(function (cachedResponse) {
    if (cachedResponse) return cachedResponse
    // Use the preloaded response, if it's there
    else return event.preloadResponse
  }).then(function (response) {
    if (response) return response
    // Else try the network.
    return fetch(event.request) /* global fetch */
  }))
})
function sendMessage (e, msg) {
  if (e.source && typeof e.source.postMessage === 'function') {
    e.source.postMessage(msg)
  } else if (self.clients) {
    clients.matchAll().then(function (clients) {
      for (var client of clients) {
        client.postMessage(msg)
      }
    })
  } else if (e.data.port) {
    e.data.port.postMessage(msg)
  }
}
