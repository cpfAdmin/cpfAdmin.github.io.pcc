'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "864aaf81a5cf59036815e67f8e497e87",
"assets/AssetManifest.json": "baf862eedf54a2197e47cdd99924615a",
"assets/assets/images/broadcastScreen_icon.png": "75cc9e5052e28ba1ded05652746fdf24",
"assets/assets/images/broadcast_icon.png": "aa998b24c6a42bb422865766149c3ad1",
"assets/assets/images/chat_icon.png": "28104903fe08aef4ae38a1a5a21edd20",
"assets/assets/images/checkReports_icon.png": "d2d77365c11675c47679859eb8d1941c",
"assets/assets/images/code_icon.PNG": "5176092a4d3be6ff77d8b224c1510848",
"assets/assets/images/communityChatroom_icon.png": "925042105383332cb054b8e53dc4565e",
"assets/assets/images/completed_icon.png": "ebcad67234ad58cde5ed16f7949b10ba",
"assets/assets/images/cpf%2520logo.png": "4d3e8d56eb4cd7e412bfcc833d960447",
"assets/assets/images/cpfPoliceChat_icon.png": "a935ab56371fda6af3c2049a12b48ffd",
"assets/assets/images/dashboardIntro_icon.png": "516354c0cc06e807706e62388f542cbe",
"assets/assets/images/dataFetch.json": "e68c2ae729db1964f9e64d01443f9016",
"assets/assets/images/feedbackScreen_icon.png": "4c447a21ee5b7de9dcf3055c50b827e3",
"assets/assets/images/feedback_icon.png": "d300e38665465d1a96dc00805f98d410",
"assets/assets/images/inProgress_icon.png": "fbd4dc1277fdd39288f5a63219570a43",
"assets/assets/images/introduceYourself_icon.png": "b0c290319570d81a7ce5f0ade786e489",
"assets/assets/images/login_icon.PNG": "0e31b904e444c57cc467efd3036e546f",
"assets/assets/images/logoutSession_icon.PNG": "76df158f05163cca8b52cfda56f034f0",
"assets/assets/images/officerChat_icon.png": "5b2e75f6efab4c10ef6827a3aa721822",
"assets/assets/images/regionalChatroom_icon.png": "8687513d6285a742c5182292c16179a3",
"assets/assets/images/registration_icon.PNG": "dc00d4ef424ec9e0add14bd7bf02181c",
"assets/assets/images/reportIncidentForm_icon.png": "690db674e110d17b775ae8be0a194026",
"assets/assets/images/reportIncident_icon.png": "cc10981c949e4120f20fab3222a09684",
"assets/assets/images/requested_icon.png": "d085e34016200be8fb439fe053c374b1",
"assets/assets/images/Screenshot%25202023-08-19%2520185532.png": "54ec75ce621b6cea41f0207922899400",
"assets/assets/images/Screenshot%25202023-08-22%2520093045.png": "d0342af52a6c22a555ff9252547c40ec",
"assets/assets/images/signup_icon.PNG": "e3ea184f8e67fe715fdd39a77ab52e2a",
"assets/assets/images/stationProgress_icon.png": "bb257814e1c4d19ad40378dc986c9b6f",
"assets/assets/images/trackReports_icon.png": "883dfa2a96d7442a76c745b8aad9907b",
"assets/assets/images/userProfile_icon.png": "1cba1ffe0666cd86ebdf47dca069b933",
"assets/FontManifest.json": "535f15d5ee3029ad18f23a9a1ce25fdb",
"assets/fonts/MaterialIcons-Regular.otf": "297d48a5271d20b59382c30214d5d7d3",
"assets/NOTICES": "2d262b6b55baf9ef3c099e72490e4613",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/dropdown_button2/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "08b0dfd014d0b43231aa2b5310f353c4",
"/": "08b0dfd014d0b43231aa2b5310f353c4",
"main.dart.js": "591fb00bbdda0f8c8d1bba52243c6136",
"manifest.json": "99154b355d1d9564b4977f8585aa8c31",
"version.json": "465b4c3684873c3724b470ea65aff4e5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
