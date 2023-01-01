const assets = ["/","styles.css","app.js","sw-register.js","https://fonts.gstatic.com/s/materialicons/v67/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2"]

self.addEventListener("install", event => {
    caches.open("assets").then(cache => {
        cache.addAll(assets)
    })
});

/* self.addEventListener("fetch",event => {
    const response = new Response("hello, I'm a response")
    event.responseWith(response);
}) */


self.addEventListener("fetch",event=> {
    if(event.request.url == "http://localhost:3000/fake"){
            const response = new Response(`hello I'm a response on URL ${event.request.url}`);
        event.respondWith(response);
    } else {
        //  we want to try and see if the request is cached
        caches.open("assets").then(cache => {
            cache.match(event.request).then(cachedResponse => {
                event.respondWith(cachedResponse);
            })
        })
    }
})