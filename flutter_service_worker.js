'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0f2e459c80bff5e335d179baab23ae02",
"assets/AssetManifest.bin.json": "4ca41128a466c0ea201c4b9f1305b3df",
"assets/AssetManifest.json": "cf3ca4409ece72c8fa85012624968ad4",
"assets/assets/Backgrounds/about-style1-1.jpg": "92358ff1192849d12dc3fd527fbd8b7f",
"assets/assets/Backgrounds/about-style1-2.jpg": "648258162c7f7729b6be0332b86af25e",
"assets/assets/Backgrounds/breadcrumb-1.jpg": "3bb00b0c4906f090d4ccb74ffb9e389c",
"assets/assets/Backgrounds/breadcrumb-2.jpg": "ff2b458285ba6c564a032d3ad5a1ef5e",
"assets/assets/Backgrounds/card-1-300x199.png.png": "12de3c8fcdd90bb985b8f0dc307585c6",
"assets/assets/Backgrounds/card-2-300x199.png.png": "b2ca7009a0bc7a512b0acfc32e32f736",
"assets/assets/Backgrounds/card.png": "0f572916fd23ad256831a4d301a20ece",
"assets/assets/Backgrounds/contact-info-1.jpg": "44044a31030fa78181e60c6e3fb0de4d",
"assets/assets/Backgrounds/contact-info-2.jpg": "4a1b52b58a285e66d701ae879ecbb57e",
"assets/assets/Backgrounds/contact-info-3.jpg": "cc6b5942325121f396e07ee53e852e74",
"assets/assets/Backgrounds/contact-info-icon-1.png": "f5d2436d66fedd4f899f0d6cdd32c31f",
"assets/assets/Backgrounds/contact-info-icon-2.png": "bec40654fd6bc6e364b3a4ef7e28942a",
"assets/assets/Backgrounds/contact-info-icon-3.png": "80f88a403a278728ff8f2fc7b5876eac",
"assets/assets/Backgrounds/features-4-1.png": "bdb3921706623f6bec766642a75bdca9",
"assets/assets/Backgrounds/features-style1-1.jpg": "864b700d97d06d2e54a67c3f95200d92",
"assets/assets/Backgrounds/features-style1-2.jpg": "2207b4872bfce506fb542094b54e9da1",
"assets/assets/Backgrounds/features-style2-bg.jpg": "343182ff7db5c4920813731e04e76306",
"assets/assets/Backgrounds/features-style3-img-1.jpg": "90faace4ef54bdd7b503592e0425fd2e",
"assets/assets/Backgrounds/features-style4-shape1.png": "282c1964215f69847d2c85fa9c74e745",
"assets/assets/Backgrounds/features-style4-shape2.png": "dbd6203e35a68f08c4cb11e4513b1c00",
"assets/assets/Backgrounds/features-style6-shape-1.png": "4a373261967c12f67439dbb1637f9948",
"assets/assets/Backgrounds/features-style6-shape-2.png": "9f08114e0d1a0542526e2623f1268c8f",
"assets/assets/Backgrounds/finances-style1-bg.jpg": "1ee48ed969cfdf4e79dc1529fff7ffdd",
"assets/assets/Backgrounds/grow-wealth-2-1.jpg": "6fb53363a60d29e0e3d5f545152758e5",
"assets/assets/Backgrounds/grow-wealth-2-2.jpg": "f95f74b7b91fa28a1544f65e79eb8c5a",
"assets/assets/Backgrounds/grow-wealth-2-3.jpg": "583fdd11dadfde85cffa813459bd694a",
"assets/assets/Backgrounds/grow-wealth-2.jpg": "945900d10d5bc0cf91d7d50132ede74f",
"assets/assets/Backgrounds/grow-wealth-3.jpg": "ed41feee9778703fffb6e84657ab565d",
"assets/assets/Backgrounds/main-contact-form-img-1.jpg": "8bc7371f8523dfc13cb75fca22ee3366",
"assets/assets/Backgrounds/round-dotted-shape-1.png": "d7706b19002b3b5538c5fdf5425b840f",
"assets/assets/Backgrounds/slide-v1-1.jpg": "9fd5ab89bf5368e843447255ce7f3a93",
"assets/assets/Backgrounds/slide-v1-2.jpg": "5d9111f4e914cd89a6a525ac53beeb61",
"assets/assets/Backgrounds/slide-v1-3.jpg": "e5cbaffea849757b0360478700726603",
"assets/assets/Backgrounds/slogan-style2-bg.jpg": "beddc886ec44fbc5c8eb5253257b5733",
"assets/assets/Backgrounds/Spline.png": "ff232f0cf3ebd732ca4383c381450714",
"assets/assets/fonts/bofa_icon.ttf": "1422286b456e22ccaca84086e64daff4",
"assets/assets/icons/apple_box.svg": "3f634f4f80414d88ada3193069b4f961",
"assets/assets/icons/Arrow%2520Right.svg": "82b7f5520958b35402d7576d20fb5186",
"assets/assets/icons/bubbles.svg": "f218c046b42e1528132d6bc9d562403e",
"assets/assets/icons/code.svg": "516c08c5e685a49b79fa87d0cc2f7641",
"assets/assets/icons/email.svg": "1ae885eb1fdb247400ac0400112ddefb",
"assets/assets/icons/email_box.svg": "a09e0cb77621a100cfe8c98593b9f422",
"assets/assets/icons/fail.svg": "ce93a488370edfe06a1587f6d72b1e65",
"assets/assets/icons/fail2.svg": "a84b87799b455ee93f7c7321f02ce1bc",
"assets/assets/icons/google_box.svg": "9f643ad1c6e2731879c4eb501357d784",
"assets/assets/icons/ios.svg": "45b815957b353fc2c4b56e2e3779d6f3",
"assets/assets/icons/password.svg": "64a726ac604a3e6228987eeb9c10bc71",
"assets/assets/icons/profile_img.png": "bdd25e977a6858b7413f720188f721c3",
"assets/assets/icons/User.svg": "5eb1b43b454f1e763da0928d4841c138",
"assets/assets/RiveAssets/button.riv": "c8ffe2900d31d8236247928cd7c2b5f3",
"assets/assets/RiveAssets/check.riv": "14f9269423eabd7e2e10cafdc6ad4d41",
"assets/assets/RiveAssets/confetti.riv": "ad0d13cbea799085305316f0e8118274",
"assets/assets/RiveAssets/house.riv": "3ac77437a4c56b5143d6ceca83dd61d9",
"assets/assets/RiveAssets/icons.riv": "3d29f9acebef13f01f371b59e84e664b",
"assets/assets/RiveAssets/menu_button.riv": "f8fdfd9fd8dc7873dfac6f005f3233c1",
"assets/assets/RiveAssets/shapes.riv": "8839d67714d5e9c52b3e0dbb2b1e89c1",
"assets/FontManifest.json": "4d526521f5e35f26a50840c97fef6315",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "f7db98014031ff507aaa801d16c20215",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "674f48f45dcd2fc51063cd70d5271169",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "1ba461e585ec3117bc5f5cc210b2d54f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1e936b9ae2374fa5a317c3112e4c5bea",
"/": "1e936b9ae2374fa5a317c3112e4c5bea",
"main.dart.js": "e2374b7ad37a00246433a9abe5676ca9",
"manifest.json": "b0747e45a319279652d0f5f94d439e56",
"version.json": "2da8c8989535728ad544912e4576b80a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
