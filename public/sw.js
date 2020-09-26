const ASSETS_CACHE = 'ASSETS_CACHE_V_1';
const GQL_CACHE = 'GQL_CACHE_V_1';
const ALL_CACHES = [ASSETS_CACHE, GQL_CACHE];
const GRAPHQL_URL = 'https://spacexdata.herokuapp.com/graphql';
const CACHE_ASSETS = [
    '/static/media/elon.2c9f684f.jpg',
    '/static/media/shotwell.9cedd0ee.jpg',
    '/static/media/spacexLogo.96afe8f6.jpg',
    '/static/media/tom.fd77617a.jpg',
];

// Call install event
// this.addEventListener('install', (e) => {
//     console.log('Service Worker: Installed')
// })

// Call activate event
this.addEventListener('activate', (e) => {
    e.waitUntil(
        Promise.all([
            // Delete any previous versions of caches
            caches
                .keys()
                .then(cacheNames => {
                    return Promise.all(
                        cacheNames.map(cache => {
                            if (cache in ALL_CACHES) {
                                // Remove all old caches.
                                return caches.delete(cache);
                            }
                            return null;
                        })
                    )
                }),
            // Statically cache some assets
            caches
                .open(ASSETS_CACHE)
                .then(cache => cache.addAll(CACHE_ASSETS))
                .then(() => this.skipWaiting())
        ])
    )
})

// Call fetch event- Caching Policy: Offline
this.addEventListener('fetch', event => {
    if (isGraphql(event.request)) {
        handleGraphQL(event);
    }
    else {
        event.respondWith(
            caches.match(event.request)
                .then(response => {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }

                    return fetch(event.request)
                        .then(response => {
                            // Return the response if it is not a valid one.
                            if (!response || response.status !== 200 || response.type !== 'basic') {
                                return response;
                            }

                            // Clone and cache the respone if it is a valid one.
                            var responseToCache = response.clone();
                            caches.open(ASSETS_CACHE)
                                .then(cache => {
                                    cache.put(event.request, responseToCache);
                                });

                            return response;
                        });
                })
        );
    }
});

// Caching of GraphQL requests
function hash(x) {
    let h, i, l;
    for (h = 5381 | 0, i = 0, l = x.length | 0; i < l; i++) {
        h = (h << 5) + h + x.charCodeAt(i);
    }

    return h >>> 0;
}

const isGraphql = request => {
    return request.url.startsWith(GRAPHQL_URL);
};

function handleGraphQL(e) {
    const exclude = [/query GetCart/, /mutation/, /query Identity/];
    const generateQueryId = e.request
        .clone()
        .json()
        .then(({ query, variables }) => {
            // skip mutation caching...
            if (exclude.some(r => r.test(query))) {
                return null;
            }

            // Mocks a request since `caches` only works with requests.
            return `https://query_${hash(JSON.stringify({ query, variables }))}`;
        });

    const networkResponse = fromNetwork(e.request);

    e.respondWith(
        (async () => {
            // get the request body.
            const queryId = await generateQueryId;
            const cachedResult = queryId && (await fromCache(queryId));
            if (cachedResult) {
                return cachedResult;
            }

            return networkResponse.then(res => res.clone());
        })()
    );

    e.waitUntil(
        (async () => {
            try {
                const res = await networkResponse.then(res => res.clone());
                const queryId = await generateQueryId;
                if (queryId) {
                    await saveToCache(queryId, res);
                }
            } catch (err) {
                // eslint-disable-next-line no-console
                console.log(err);
            }
        })()
    );
}

async function fromCache(request) {
    const cache = await caches.open(GQL_CACHE);
    const matching = await cache.match(request);

    return matching;
}

function fromNetwork(request) {
    return fetch(request);
}

async function saveToCache(request, response) {
    const cache = await caches.open(GQL_CACHE);
    await cache.put(request, response);
}