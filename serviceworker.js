self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('/').then(function (cache) {
            return cache.addAll([
                'index.html',
                'blog/',
                'css/',
                'images/',
                'js/',
                'lib/',
                'blog/python-redefined--all-the-basics-that-you-need-to-know',
                'blog/index.html',
                'images/app_icon.png'
            ]);
        })
    );
});

<<<<<<< HEAD
self.addEventListener('fetch', function (e) {
    fetch(e.request);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
=======
 self.addEventListener('fetch', function (e) {
     fetch(e.request);
     e.respondWith(
         caches.match(e.request).then(function (response) {
             return response || fetch(e.request);
         })
     );
 });
>>>>>>> b73b4adbe9be8e77eeee7f295afd5418c21f2897
