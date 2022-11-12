const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "./img/logo.png", "offline.html"];

const self = this;

//^-----------------------> Install SW <----------------------^//

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

//^------------------> Listen for Requests <-----------------^//

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then(async () => {
            try {
                return await fetch(event.request);
            } catch {
                return await caches.match("offline.html");
            }
        })
    );
});

//^--------------------> Activate the SW <-------------------^//

self.addEventListener("activate", (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames.map((cache) => {
                    return !cacheWhitelist.includes(cache)
                        ? caches.delete(cache)
                        : null;
                })
            )
        )
    );
});
