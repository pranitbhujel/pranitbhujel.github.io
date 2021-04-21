self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('/').then(function (cache) {
            return cache.addAll([
                'index.html',
            ]);
        })
    );
});

// self.addEventListener('fetch', function (e) {
//     fetch(e.request);
//     e.respondWith(
//         caches.match(e.request).then(function (response) {
//             return response || fetch(e.request);
//         })
//     );
// });