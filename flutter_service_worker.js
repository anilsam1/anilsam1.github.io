'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bd9c203a0d19d7451864a1ae34dfaaa7",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "80b7f3c2a7bb29c643595523dbc0fc2e",
"/": "80b7f3c2a7bb29c643595523dbc0fc2e",
"main.dart.js": "eabf146477ad5033eb0f4471bd53e7b6",
"flutter.js": "1e28bc80be052b70b1e92d55bea86b2a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/AUTO_MERGE": "26deb5eeeeed9185d501670e432d7ea6",
".git/REBASE_HEAD": "b406b6ed4cc0cff6fc7b20cead5985da",
".git/ORIG_HEAD": "b406b6ed4cc0cff6fc7b20cead5985da",
".git/MERGE_MSG": "c683f945222a81734371860e5572eff7",
".git/config": "29d6309bd3e577d9548f8b91f8a20fbc",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/68/09be2afac6ef15e52f17f7e21f7b6f21d4b4ed": "340f0711e78cd6c26ef91077d0297752",
".git/objects/03/336bb4bcbecd757df9d1b8693b565dfac0a844": "7e2a35b1e66d109ecadc91d5c2933f06",
".git/objects/3c/797d4f84b0836d39e70303d6cc726910b0a026": "4ea0efae74278bcb2d71c61f051c6e4b",
".git/objects/0e/9928d3df3d1691548d9d0bd64c7d4abe2053c4": "e71728a74334c649795b528174eedae1",
".git/objects/60/945552bd06b85d105d518f010895ae6484df84": "da8e38cae534d3b7f2d9fe23f3f14c8e",
".git/objects/34/3ee49184d318ab8f8e8ee7b38b08abe9999372": "ca92ab10491e1eea81c46b91f58e3de8",
".git/objects/34/27be90c6eeb9df43357df25fd399639f75a51e": "6e5d1e65bade61e78dd9c3e479671eb1",
".git/objects/b5/ac2aca365f9978403276be15a93f0d70fb4c7d": "c130ea48c6082a116ecad81b299bc743",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/a2/a7cada8d4c8c369c98f9a5da7d7400106678c0": "acf304d4e208ba9f3c0bc1aebf969b25",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/a927935152eb94cfac2bc4e94ccee72e68af6f": "3e011af8c01aa82c97a86331589ecea5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/4df51af58083fbdb4887bc1a733839b9926463": "4813fbec5a199f6d5a08c1cb43bdd80a",
".git/objects/c0/90f8e0507804c91c13cd299ec4632198e5f8d0": "4c15d2237a792e2cc4d11c730645fc2c",
".git/objects/ee/f87fef888e4211617eff2e28c1eed9f871b099": "34eeccc4dbe046b08022af0b8ee0a0ee",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/cc735859682301e4f67c9cc55aa0f318bfbfd2": "1caf4651ce26abd10c33ef39f8ded183",
".git/objects/f5/55e9201bbaa1c3f9c25eda93445117f140d7c5": "4c37284e17969bfb4b0a239f6d7dd3a7",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e4/6f22488dc41795718ae0ffb8c44276adcf79a3": "1372e278bc7fb42be8a1efe37162bab0",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/c1/0bbca1b30d8e0551f925cb0aa42dc4475da07a": "04f8c35fa7898dae4b19f60643a0c184",
".git/objects/20/7f4bfce27ae1dd77283f874c28aece65285d02": "82c560f867f4f3ef97dea6ad5492b5bf",
".git/objects/18/1ea3e094a26e4546f406095192ad9953c1069d": "d41b0b609d78a857a1d72fd7b2937596",
".git/objects/7d/856902b8305a3649b452d8b83c6475219d9b25": "2a9d5c684079ac8f14052c0637b7169e",
".git/objects/42/61be1d6e122baf0befd996f15a2598364ba953": "c6a7dc7b8fb4cb542143d3a95144fd1f",
".git/objects/1f/49df2727776926291202e2bb9e98181b7462b2": "afd1b1c2e8df37ae0fedd233c904af9f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/8ece4b692a36b365370f210ddc7d2af204f843": "3ffcf9f17d42821c3e109389a003a60e",
".git/objects/81/243dc487097167408acd69376e7d247ac3a73b": "e48349a3ff56212e265b2116ef485a38",
".git/objects/43/06fe03d255dccb99facb580d2d53bcdc651d94": "9a058f8f1e3471afbd97d81c01ffc203",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/6b7fa14aff6160044f8657fef3e5c14d6fb0b0": "bb6a4467dde19c56b437f2148e915cfe",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/31/f26718018b734459a58f1bfaa2ce4c449b5da2": "b4fb850673174ccf4c32d2407ce7f0da",
".git/objects/54/8d1f5db71a877e28abd67b880d048d77bf90f2": "16df6c972ef5f227ba1eb3832094dedc",
".git/objects/08/a957bd6c7d357088c09d561ba629471e1e6b2a": "904b8dd2f81365705659b0387dc0e0de",
".git/objects/39/51373679c2f77473b78a0f76d3631b0a4ab627": "a154f043d056834f25a996da1a37895f",
".git/objects/99/afae27de31dc32b64b2db0c703ec1d7df6deff": "8110ca6c802da3bdbb15a38cd0e7b360",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/6066d6948241767731a62a9a1ba258c4bf4ae6": "03a3e72220ddbb7b292eaf28c909b6e6",
".git/objects/b1/87af0051eae4dbfef0d60a7c05278fec32acd9": "915154e0a1579d4c3c496cab5aa8ca91",
".git/objects/a9/39c0804149ebf0be7bbe215a735dafbd4c5d91": "da13d9e39812b5a98af48622dd88b026",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/f18deabab30931091f15fbe184a4c778d2373b": "45c731cc74e8be96172f6e2530e38c19",
".git/objects/b0/865ddb803d59d6f88b3fa8da00b0dc728a71f7": "9b250b4e4aa17dbdefa0063e35a8bf40",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/fe665cbb12f74aa66411bf2894d347c9f23787": "717af043e49a6c72d1e56d49f695394f",
".git/objects/f9/0dff92491150117dd2e4b121e0b3524913b339": "4936d9aedc81141870f15f826c0dadfd",
".git/objects/c5/1173a39ba656527962909296a4f42ced3080ca": "26b8d2d3b2cd993d1cbbaf54d9873c37",
".git/objects/c2/a37198013c7755681158c00971a88fc813b013": "6efd7832fedc251ce1d84477c337228a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e7/d5c6fae47816937c3e0e6428c16e3e76c20da9": "70cd7f43b97e4e4a1a9388a1df2bbded",
".git/objects/e7/5b9f2b192d44b403d0cb1f850e7aa0424ae184": "9b0f27e1155306828ee6209d1fede9f0",
".git/objects/e0/5cdc2fd328468898aedaf07c8d34dcdbfc758e": "49f28867f1a49b8650c99de872e45eaf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/4bb76752d3486e96cf2a1829a96ee0392fcbfc": "f4b49026e9428e4b1b3c2fda673a3397",
".git/objects/8d/6ad7b32c3535fa7b6bafdc9a020597f3d1e264": "c5dd0224dcb3a410b6b8a862bc63d408",
".git/objects/15/d009a86087d90dc1f463d5c2ef72e049fb1640": "2b66c09e80a6434658f75c1fcc4bc6d8",
".git/objects/8c/71fec53ff612fb51abb5152bb47f1c17903757": "7f1486abcd718a92db4dc3e7c4a7ec6b",
".git/objects/85/fa62e153e4a71a993472340df7e2c38be732ae": "36f21edd4dc550e8de468f9f8152b767",
".git/objects/47/6eb5421cd7360db3156791d48c6a12e7017c78": "e5dde10b2b3e75d76fd1f7c6a3f78173",
".git/objects/8b/c4fcc37241fcf838010e7578d1f4c3bb6c1051": "542c19edf87c39f8e30948eed3ea9f02",
".git/objects/22/625f02a2e210424c16ec6f8ee91585b5ba08b8": "1cd27b69009792fa1be610269be12c79",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e60e7b18f76f9b76e7c4642cc79f462d",
".git/logs/refs/heads/main": "c665cc430770f4740394e2d387d4f969",
".git/logs/refs/remotes/origin/main": "8622eaed7b35a4f48410c825c5ed68e3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "fc57c291fa317d68c89ea27a0db01d8d",
".git/refs/remotes/origin/main": "b406b6ed4cc0cff6fc7b20cead5985da",
".git/index": "7c52b89c502fbeb259377fa46eb232a5",
".git/COMMIT_EDITMSG": "aabd97abe646e0daddf3091678ee506a",
".git/FETCH_HEAD": "d2ffc1c351b3f18d6e93d5e65a8350f0",
".git/rebase-merge/git-rebase-todo.backup": "80c7335da6d6dd51e269189eadb3d830",
".git/rebase-merge/head-name": "360efc618fa1294192e18ee097c9fae4",
".git/rebase-merge/orig-head": "b406b6ed4cc0cff6fc7b20cead5985da",
".git/rebase-merge/git-rebase-todo": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/message": "80c30e3dbb07c7c22105fc85a60b23da",
".git/rebase-merge/onto": "8d5870ccb730d8494e0268c963b6b0c9",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/patch": "004c1c430b9621bbf5183dbd9d0939c6",
".git/rebase-merge/done": "ffd6ddba0c43d56a3a153f004377ee9d",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "b406b6ed4cc0cff6fc7b20cead5985da",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/author-script": "2ba676c0480773dd9acdc18d4eb259b3",
"assets/AssetManifest.json": "66b7babb01e03be2f9856dc8841a45ad",
"assets/NOTICES": "db7dd040ae46c60236ffe5fc0a928db4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "57caaea1f84999c46f71fdb92705f0d5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d955c08247200f1ec3dcd2d4d0426751",
"assets/fonts/MaterialIcons-Regular.otf": "2210601afaa4270c3f0c7389b62940d8",
"assets/assets/images/cursor.png": "6163b4ab76f9abbb74a2038ae28a8fdc",
"assets/assets/images/git.png": "64d86e4d96afd82ad3e93ea80a6fedd8",
"assets/assets/images/profile_image.png": "f5f68315687af4b993ea2cbb12270b96",
"assets/assets/images/Gradiant.png": "97978f4cab81b76614cf205e52504036",
"assets/assets/images/flutter.png": "6e329d9425d4252dc5eb999a60311106",
"assets/assets/images/hyperlink_logo.png": "2a456e3bc07c197c6e2e79afc92d7a20",
"assets/assets/images/firebase.png": "f4673180025a297925be76fa0901c6a8",
"assets/assets/images/Arrow.png": "702c8572647f15d690bb4220b73f534d",
"assets/assets/images/figma.png": "04e85f0a9e564c88bfbd202441a75652",
"assets/assets/images/vscode.png": "9fc113bc7ba6ecf4240642e8cf77b67e",
"assets/assets/images/hive.png": "ef40b5f493fa6b0ca921550d5c797440",
"assets/assets/images/api.png": "74f59919abe00339ce2ac8c8e18cc98e",
"assets/assets/images/dart.png": "f4fd131c55e8ed9681cc6f10e0b888bf",
"assets/assets/cv.pdf": "818249902bcb1e37145b52636bce4852",
"canvaskit/skwasm_st.js": "7df9d8484fef4ca8fff6eb4f419a89f8",
"canvaskit/skwasm.js": "9c817487f9f24229450747c66b9374a6",
"canvaskit/skwasm.js.symbols": "0ca2354c92f5c57e89b01ba4269d0a02",
"canvaskit/canvaskit.js.symbols": "53ebfd139e29e2ea038796ad5de96691",
"canvaskit/skwasm.wasm": "2633ddbb5c67dd6138f349f19082fa84",
"canvaskit/chromium/canvaskit.js.symbols": "174331dc3cfd8cc59d48eccd7d26e03c",
"canvaskit/chromium/canvaskit.js": "9dc7a140b1f0755e6321e9c61b9bd4d9",
"canvaskit/chromium/canvaskit.wasm": "67634589ed463666cb45f0d92566987d",
"canvaskit/skwasm_st.js.symbols": "e8c3533b95bb1ce3f73f384ad7316891",
"canvaskit/canvaskit.js": "8cf6e87eff144e2453a9640bfa1a4ad0",
"canvaskit/canvaskit.wasm": "d1c4dd59cc603c74bb2369dc221fee30",
"canvaskit/skwasm_st.wasm": "b90d2b49f6f8882fbd7897a0a4da67e8"};
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
