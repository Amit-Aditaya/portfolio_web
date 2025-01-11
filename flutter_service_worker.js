'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bfd50f9733a8427c715198e357756dcd",
"assets/AssetManifest.bin.json": "348640e04fd73bfa01d6996f206a63c3",
"assets/AssetManifest.json": "0af90f679b7cbb42cf931dbac5ce7e70",
"assets/assets/fonts/RobotoCondensed/RobotoCondensed-Black.ttf": "3541105866680308505e4b754e1e2363",
"assets/assets/fonts/RobotoCondensed/RobotoCondensed-Bold.ttf": "0233b881b26ce6cc3884c6944940d11b",
"assets/assets/fonts/RobotoCondensed/RobotoCondensed-ExtraBold.ttf": "820ce552a056f8ccdb9703949cdcd954",
"assets/assets/fonts/RobotoCondensed/RobotoCondensed-ExtraLight.ttf": "3c8dbc9cdab9e837f36517bd1d264042",
"assets/assets/fonts/RobotoCondensed/RobotoCondensed-Light.ttf": "68680c984f72eef7b2e2cf269382f2a6",
"assets/assets/fonts/RobotoCondensed/RobotoCondensed-Medium.ttf": "71b4c6d87c5477f0c7843ec6d324e298",
"assets/assets/fonts/RobotoCondensed/RobotoCondensed-Regular.ttf": "f1123f4b3d926ac4f72cc8091a4b5d19",
"assets/assets/fonts/RobotoCondensed/RobotoCondensed-SemiBold.ttf": "f9d8e599ea4411e8993c7bc09918fadd",
"assets/assets/fonts/RobotoCondensed/RobotoCondensed-Thin.ttf": "9e024e12238807fd31f3a56c346fcbbc",
"assets/assets/images/babuland.png": "991b7ca9b14d4449a22d418642f5cd49",
"assets/assets/images/babuland_host.png": "35cd84b9ab934e8876300760e2c21b33",
"assets/assets/images/babuland_logo.png": "e2a1939492020252382c91337acbdaf0",
"assets/assets/images/cfd.png": "9bc9385de5d0afcc6509d124a5153a5b",
"assets/assets/images/circles.png": "b30da61652188a50b93d58fc5a197382",
"assets/assets/images/dp.jpg": "9248c90849735e9664954d56e64b56d8",
"assets/assets/images/dp_nobg.png": "91c9cea7c2f503d1b36d6b06b80a08c6",
"assets/assets/images/eatos_logo.png": "5303024ff001875b313cb221d23d7884",
"assets/assets/images/eatos_logo_2.png": "e72cb2e159211dc9843c93679c4b5374",
"assets/assets/images/hero-splash.png": "f40b48a7464982cd63493dde5b58daf9",
"assets/assets/images/kds.png": "1e2807aeda5468b7c35236583feac67b",
"assets/assets/images/kiosk_1.png": "87612075c6c1324e20e46e3b08baa03b",
"assets/assets/images/kiosk_2.png": "5d4060e03f51d508236ccf9e10f3bd20",
"assets/assets/images/pop.png": "d4c11ed2ba18b13e0c05cfa9e66db93e",
"assets/assets/images/pos.png": "0a83e79c58b589b4199c980cf6a43fe0",
"assets/FontManifest.json": "9ede310b1a7f047aec06e5237e3ef30c",
"assets/fonts/MaterialIcons-Regular.otf": "90e56842bb0999dc8aef8cd21c78e66f",
"assets/NOTICES": "d54fc6d483dad78554d595a4a6be2eb5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "14c6f99c111af67f497d68554dbd5a9b",
"/": "14c6f99c111af67f497d68554dbd5a9b",
"main.dart.js": "f0373dd24a854e2a2c8a2ca6ae133313",
"manifest.json": "7f3138056894abffdf49b28177f3c91b",
"version.json": "758b70b6fbc1910a5743f961e69661e0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
