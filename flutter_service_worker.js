'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f5e72a1cb4be287a08eb191ef7db8a68",
"index.html": "181a6a5718ef6d3d4b245d95c1912e4d",
"/": "181a6a5718ef6d3d4b245d95c1912e4d",
"main.dart.js": "4513adb031a7302555b929a5af86810d",
".well-known/assetlinks.json": "41653f4423e4e7966da740a094aff09c",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"_config.yml": "dc8fe32f8ea298553d3e80fa2759af45",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d8cb3f04133deb8be434daf57ab593cf",
".git/config": "e9892b644bcf249fa05315a0a0a2cf3a",
".git/objects/92/ae6d4bf386094767b2c07112f04ad96afa5960": "020d35572f06e1b725037e07df9452ee",
".git/objects/0c/3291337a8e87e2a85268aa064cce018e96aa4d": "d777de975d8702c96b88f42755387172",
".git/objects/68/730c992de52cc35cc8c0d9a566215e8432d095": "f2346a8b3ff07a2e141955960c143c51",
".git/objects/6f/9e0313265716fd46be42d9bf9d1db9a4742abb": "84e8b08246ba580641361c2e7af59052",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/58/685f0f9b160027069aeba78d0f08db6287c543": "26f7c80b850d5545ba68df7ca0c6e8b6",
".git/objects/94/eb9022e16c14367f15bdc763b1d1e2b2796374": "9b399de822f7417b0d4793ae18cef38a",
".git/objects/05/7506983f0a8b0438fc5f24382db64497bf6eae": "90601edfa45851b2856f614e122579a0",
".git/objects/d9/176d75ee4c8d916d95756c1f487ad6885dd22b": "3b69a43de3013e6d930e48d88b3f814e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/c8/2c2cb2e9a069bb38758194ecc461443878fe07": "fac21279daaed95e8c9ffe4661e725e2",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/42/c68a6bb08569a045b5defbf5e392965a2059f5": "9c92fbd24f3932db2bd6e1896f67f48c",
".git/objects/89/348d66b317dd9aeb0354257d98d1791e82ddd3": "3def787e7dfa195d7fc17b24b4c4b0d4",
".git/objects/45/a3375706bf6f4d93822770a4b5ee02827d5c45": "a4218f2dd2c499fb1a8e8e63aeebdea6",
".git/objects/73/dd6bc1a8e58d8bbed9688e10c8ffb4f8bb7936": "132e3693fc6fd43a4787f176f3fdb251",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/255b38dc0a7adb9c1603f87c58f2bd97b1582e": "4e88f7eaa07e27778bee083230ca2307",
".git/objects/44/8afa971e3ed4565bea8e3d0bb55aaca666e458": "4e5d4d1cb204b7391309dc9a4c9829fd",
".git/objects/44/260d5c0ee4b88dbbc3d4aea769e3f3aaf836d6": "5b28dd5f1c18d60c140f398f66056d8e",
".git/objects/2f/4dc4ca4f3a2bfd10386240ab7cc7f48d14cc12": "09d86f82b5ebc4d4b18d080159607f2c",
".git/objects/43/e37de685864686965ff23a4c7c7811c62d6970": "324c8278eb46039ae5a983a30c1fcc24",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/8f3ca4ee6e949cd4e7aa25cd0a5995c2a90f70": "7474dc6d5f236579347e2cde087627bc",
".git/objects/9a/20d99f5b6fe6bc0808521867787fcee0250b02": "92a650317c5c2fa0167104200f667e36",
".git/objects/54/cc569ee95749b5e6e938eb249003f1a1f9f522": "6e0d46fe72b15d4f4b054046c8a490b0",
".git/objects/30/91051d313d87089565eaf8bb5246ffd95d776f": "cf692d872410504334eef8bac418fa88",
".git/objects/08/bf4cfc2164a0bff74a4bf844128d3b843bbf87": "8a381c2400a8d3d6a20fb6bd660b5405",
".git/objects/08/c908bac8005d176ebc12b2f857b7eb607ad1ad": "dc29515dca2a8d81ec3e4e806a90f4ae",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a0/d849e748cba07a672505cc6184f178587e03bd": "8212e95b50529b0962c04bbaa187a28c",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d2/c666e7f68ce5fa38f6ff332a550fc24353a079": "596dda1611446fd1e206ebf3cae8bf36",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ffd0dc3af53672b57bb52059ee8a9b31d4380c": "2696d9ee9ef3e34a61ae485adb73cd53",
".git/objects/c3/7152d19ccc0aa73f3a25cf46cf00dec5f5b110": "3d5b0ca0e2731c8d8789091b899013a0",
".git/objects/e1/2217c9fb53d735d1a199ae14d7bf3296312690": "7440ffb61d89d4cce0e73426b52c30f3",
".git/objects/cd/839dfccc6f78b94ccb788a31de8523b3b545ef": "b8d06fdc56d7a8c58bbcc8584df257a8",
".git/objects/cc/b7c530dacdf31ddef03991ca015e5a8d3e0730": "206757ecfc5cd622ab5b7fd07cc32713",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f7/5167c07a1fef206983b65c6fe61e9f282f3089": "b28728f72b02e4eabf8451111e93aeda",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e7/e36abc474796c8b6c383380ddd9f87655682ec": "912edc8b67d1189740b5749ac48d469e",
".git/objects/f8/31785edd0f6f0f31d4887cc855facf475121ce": "852c8146bbbc3fa6c72f275a26083723",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/77/e792d7d5fe6eb5d233a5a4deb2f99ae7618eff": "9884a3566e5446edf5742f9f9753ea84",
".git/objects/84/3793a32dff948e67f5af46d3b28ceaf09085f6": "9dbbd6f9ab555ccf59662807000fbc1d",
".git/objects/84/7b9ca070272b279688e54c40cd3af492cc343d": "634d18dcecb1ced9d9e7a4751a70134d",
".git/objects/15/a26e0e9fb647ffdb60bf02620172dbbdc78d0e": "5cb70760da6e623b21829e0e2e275ac7",
".git/objects/40/c8b69c8291f1186081d1f115938589556757ad": "1eb7e15763b9b00c3edbbd0cc40a5e00",
".git/objects/7a/bff27483d23810aa5ccff0c2bdfdeb9d86644e": "e5668d1c538871c03bd173d2dc2adfd9",
".git/objects/8e/5e30a28b4435359945cf08b261c86d0de8da53": "6906b6f1c1183f6388ddf8a760f85a58",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/objects/22/8679e93dbb5228503c7b1d5091b9cce501dbcc": "682b73b7c11697f4246c5376cf4cba3d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c636fd73db40a6425a486c386b175903",
".git/logs/refs/heads/main": "c636fd73db40a6425a486c386b175903",
".git/logs/refs/remotes/origin/main": "180c1f1b2ac4b33a0851356350d1b855",
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
".git/refs/heads/main": "ba76b376ad2cca30cf48607e7a77385e",
".git/refs/remotes/origin/main": "ba76b376ad2cca30cf48607e7a77385e",
".git/index": "23f24bae79c021879520c3aabafde51d",
".git/COMMIT_EDITMSG": "b58d0d8ac1f774d0fbd88a4d9812d726",
"assets/AssetManifest.json": "094327cb9aafaa3ccf0843834398390a",
"assets/NOTICES": "990f36b5f04157c987a64546d118a4a3",
"assets/FontManifest.json": "e2c48bd9b3a619b6da7f44dd3c83f546",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "40469726c5ed792185741388e68dd9e8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "82fab87d43e67fa08052db7a31eafaf2",
"assets/fonts/pretendard/Pretendard-Regular.otf": "84c0ea9d65324c758c8bd9686207afea",
"assets/fonts/pretendard/Pretendard-Black.otf": "de507f665f6ea63a94678e529b2a4ff0",
"assets/fonts/pretendard/Pretendard-Medium.otf": "13a352bd44156de92cce335ce93cd02d",
"assets/fonts/pretendard/Pretendard-Light.otf": "de308b576c70af4871d436e89918fdf6",
"assets/fonts/pretendard/Pretendard-ExtraBold.otf": "67e8e4773c05f2988c52dfe6ea337f33",
"assets/fonts/pretendard/Pretendard-Bold.otf": "f8a9b84216af5155ffe0e8661203f36f",
"assets/fonts/pretendard/Pretendard-Thin.otf": "32c8b7e405cd546866e5ef1d33179cba",
"assets/fonts/pretendard/Pretendard-ExtraLight.otf": "049bb07edff45e5817fa4f892ebabe98",
"assets/fonts/pretendard/Pretendard-SemiBold.otf": "6fe301765c4f438e2034a0a47b609c61",
"assets/fonts/MaterialIcons-Regular.otf": "e3cd53454c4f4f453e68bada8fae2883",
"assets/fonts/monoton/Monoton-Regular.ttf": "d20753b0996b7092460eef623995f880",
"assets/assets/images/u2.jpeg": "277fc0c18d93045ace6d0a4517d2a631",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
