'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f5e72a1cb4be287a08eb191ef7db8a68",
"index.html": "685c326cc61d28d2a9ce4b4ddcd74ce9",
"/": "685c326cc61d28d2a9ce4b4ddcd74ce9",
"main.dart.js": "0de358d1e6db85d0d917bdafcb6bd51a",
".well-known/assetlinks.json": "41653f4423e4e7966da740a094aff09c",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
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
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/58/685f0f9b160027069aeba78d0f08db6287c543": "26f7c80b850d5545ba68df7ca0c6e8b6",
".git/objects/94/eb9022e16c14367f15bdc763b1d1e2b2796374": "9b399de822f7417b0d4793ae18cef38a",
".git/objects/33/01bb18562b939ae2e63946dd14d17a6506c73b": "7cd6ff1aaae1c4bcd293eec895c0ea6c",
".git/objects/05/7506983f0a8b0438fc5f24382db64497bf6eae": "90601edfa45851b2856f614e122579a0",
".git/objects/9c/cd740817ea6a00225123f60ff419d11346838c": "4051fa1fbba9485781baf42f8385d9b0",
".git/objects/b2/7f43619105c41c17a2f4cc74abff3c9d30679e": "037da3c614a27213d06313ff827eb875",
".git/objects/d9/176d75ee4c8d916d95756c1f487ad6885dd22b": "3b69a43de3013e6d930e48d88b3f814e",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/a5/f06d4c8c0971ec090bd94baeae3edd7a8d761c": "59e770dfbb5f6acaa01642e4a631758d",
".git/objects/bd/d855af960c0db991ab70c5088df006420385e8": "033c1d06b25667dcf4ed1503297e207e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/75b4f8c5309e10c039a2abdb7f42195ddbdca0": "e8a5a8be810b600bfac9505c5d6dcaeb",
".git/objects/bc/bec6bbc637d824b1b4fba8abc388a5bb3b2946": "38f40926d034cae984e4ec1d1f472154",
".git/objects/d8/52d89d00defe6fb24021e74f406e3833381ba0": "9236d15d9740710f2e8452a6e259c898",
".git/objects/f4/ae971f15040cd80f7196646bf61cc49fd7c0cb": "6b158f850ed6821238e2825ad709def7",
".git/objects/f3/b0e8a688be8982a135ad945d251c6986fb5769": "0317248cebdb437d19dc8b2fdc33ac44",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/c8/2c2cb2e9a069bb38758194ecc461443878fe07": "fac21279daaed95e8c9ffe4661e725e2",
".git/objects/fb/1efe6c615b03b85705f925775418eccc39a3da": "4adf29e6e08de65383e5f300e6118adb",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/11/feb8966adae89ae21bd548b058b5c6224df033": "d5045e072e164e8279c272c53e47df75",
".git/objects/42/c68a6bb08569a045b5defbf5e392965a2059f5": "9c92fbd24f3932db2bd6e1896f67f48c",
".git/objects/89/348d66b317dd9aeb0354257d98d1791e82ddd3": "3def787e7dfa195d7fc17b24b4c4b0d4",
".git/objects/45/a3375706bf6f4d93822770a4b5ee02827d5c45": "a4218f2dd2c499fb1a8e8e63aeebdea6",
".git/objects/1f/d560bf31d2423046079b4b46dbbeb9aacfb9b5": "7f1091a57d3493c4174534aaebc930ab",
".git/objects/73/dd6bc1a8e58d8bbed9688e10c8ffb4f8bb7936": "132e3693fc6fd43a4787f176f3fdb251",
".git/objects/7b/0661ae41096238d4e1fb31cb42794e79508a55": "d767ca9c9e76b5e061029f5285b3eee6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/255b38dc0a7adb9c1603f87c58f2bd97b1582e": "4e88f7eaa07e27778bee083230ca2307",
".git/objects/44/8afa971e3ed4565bea8e3d0bb55aaca666e458": "4e5d4d1cb204b7391309dc9a4c9829fd",
".git/objects/44/260d5c0ee4b88dbbc3d4aea769e3f3aaf836d6": "5b28dd5f1c18d60c140f398f66056d8e",
".git/objects/44/7bb509318b5e3ae9fae1594cb89e7f4ce90819": "039002fd9c16231931dfc2cf80a213fc",
".git/objects/2f/4dc4ca4f3a2bfd10386240ab7cc7f48d14cc12": "09d86f82b5ebc4d4b18d080159607f2c",
".git/objects/43/e37de685864686965ff23a4c7c7811c62d6970": "324c8278eb46039ae5a983a30c1fcc24",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/3164f3fe344501bb80d3deb68f4e910ff37f7d": "da815131c1057caf6a261c4ed97b8b3c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/8f3ca4ee6e949cd4e7aa25cd0a5995c2a90f70": "7474dc6d5f236579347e2cde087627bc",
".git/objects/9a/20d99f5b6fe6bc0808521867787fcee0250b02": "92a650317c5c2fa0167104200f667e36",
".git/objects/36/d519a7dd3ffebdb8b312d8ce83deaa17b73823": "e89b765f2b5fcfef7a62edf569fcd94a",
".git/objects/36/62c728eac3f0f08c5286cbfe12b88120ee267d": "3b5eef721b8092b2cbdb25e122698c32",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/31/77715287eec48fe1875e103822aef3ff7b2853": "58371723a321de1ea98187689e5a5598",
".git/objects/96/3bd7f665b35c1e56994c45e4cfe09cdba2a464": "615983e8a32b91aaf190f7a0fea2e849",
".git/objects/54/cc569ee95749b5e6e938eb249003f1a1f9f522": "6e0d46fe72b15d4f4b054046c8a490b0",
".git/objects/54/f547d2c6d8a51ac5d2fd70d4ef5251fd661971": "f4db6b3f24e2dc828166589e5808966b",
".git/objects/3f/ca02490daf34cfca1b4238c9535153bec6dbd6": "088e9cb92524b4ea9b6906bd1f99c726",
".git/objects/30/91051d313d87089565eaf8bb5246ffd95d776f": "cf692d872410504334eef8bac418fa88",
".git/objects/37/31d293cff28dee5ebc7035d8c438303ac59b56": "d95193f9b9d9bc310eb73406b9a4498c",
".git/objects/08/bf4cfc2164a0bff74a4bf844128d3b843bbf87": "8a381c2400a8d3d6a20fb6bd660b5405",
".git/objects/08/c908bac8005d176ebc12b2f857b7eb607ad1ad": "dc29515dca2a8d81ec3e4e806a90f4ae",
".git/objects/08/533d0d38aa4f9f175bb30ad744edff062c260b": "74df9ecc6dd75376c0394f54b5825611",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/99/12351d90aaba0ada84f2c62eb89124d992bb6e": "1e6b9db9a882a2518326e66729490736",
".git/objects/52/0e5f3f545ae6296944f28a074dd9863487c74b": "7777002b864ae319c3fa077df18dce69",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/64/b13513881391277cb3d4237dbb3aa7091679ee": "13bc8cb38bed2e8a734de7d87020b7df",
".git/objects/bf/dfc7ae2fe81afc99f785feb1bb4b4307a3c941": "59432538443d4fd997923f96e6fb4702",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/a0/d849e748cba07a672505cc6184f178587e03bd": "8212e95b50529b0962c04bbaa187a28c",
".git/objects/dc/d365af28c955fb5a84c758ca322ff9d1d6efa7": "bd0d536dfe1ab559ec4ef10b579b1be5",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d2/61c5f1bc9ebde325ef957d7d342a164b0f1cf1": "fd7b75e39eff73c604831df5fc8372d6",
".git/objects/d2/c666e7f68ce5fa38f6ff332a550fc24353a079": "596dda1611446fd1e206ebf3cae8bf36",
".git/objects/aa/a5ef2de3fd2eef97c0a1b10f4a982505e72e70": "d8f775fde2b9c89be45007e0e2cf0eb0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b0/c6209c6922e6511f6fcd7bc616136d107618ec": "9d788730d83a473c702015c58a156de8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ffd0dc3af53672b57bb52059ee8a9b31d4380c": "2696d9ee9ef3e34a61ae485adb73cd53",
".git/objects/ef/f7aa92680f4f5309c0372f7f7dada3771edd00": "2a9bfa0112a2d0d91b76577a801ee269",
".git/objects/c3/7152d19ccc0aa73f3a25cf46cf00dec5f5b110": "3d5b0ca0e2731c8d8789091b899013a0",
".git/objects/e1/2217c9fb53d735d1a199ae14d7bf3296312690": "7440ffb61d89d4cce0e73426b52c30f3",
".git/objects/cd/839dfccc6f78b94ccb788a31de8523b3b545ef": "b8d06fdc56d7a8c58bbcc8584df257a8",
".git/objects/cc/b7c530dacdf31ddef03991ca015e5a8d3e0730": "206757ecfc5cd622ab5b7fd07cc32713",
".git/objects/e6/55dd648db4320c479ee0ad09aea50372202541": "fe0fe6bbc80de1226ece0c81488b5a94",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f7/5167c07a1fef206983b65c6fe61e9f282f3089": "b28728f72b02e4eabf8451111e93aeda",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/fa/40bf06a4d42411e6d5cf17a39f4393c5ea4046": "eabb35286f37793882bc549f42387c7c",
".git/objects/f6/cb747826bb3e08215ce12172a82d94b8029fbd": "44a954d9bc6708de40c988b0ff80a2f6",
".git/objects/e9/2382d84b9ac82c4766bdc6efa980c6da65b3f8": "ec2c7a663d24782bf1257a75b739babc",
".git/objects/e7/e36abc474796c8b6c383380ddd9f87655682ec": "912edc8b67d1189740b5749ac48d469e",
".git/objects/f8/31785edd0f6f0f31d4887cc855facf475121ce": "852c8146bbbc3fa6c72f275a26083723",
".git/objects/46/c8a3b27670c42d39513d07a3e6b5bca16a221f": "92bfab93f8240fb4a99040ddafa7231e",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/77/e792d7d5fe6eb5d233a5a4deb2f99ae7618eff": "9884a3566e5446edf5742f9f9753ea84",
".git/objects/77/4d8452153b31a93ef3980d5dc0c1f0b07345fa": "da90070c6540c301d69e080aed7bbdb2",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/7d3706470428ad6aa3df17905fa4c36f64a938": "b783b8a69c747fb9f4f755e4d0f64817",
".git/objects/70/21d28b71ebda890f1f6a7885970632e5ec6413": "1a7dd315788c277935558057a6367a85",
".git/objects/1e/bf84873c16b8b9e1d98f592d7cdfd8f0c3c7d7": "8b7c7f87511e1bfaf77c17d3af1da4f8",
".git/objects/84/3793a32dff948e67f5af46d3b28ceaf09085f6": "9dbbd6f9ab555ccf59662807000fbc1d",
".git/objects/84/7b9ca070272b279688e54c40cd3af492cc343d": "634d18dcecb1ced9d9e7a4751a70134d",
".git/objects/4a/585bae4cb0a4e427f2c19d963b2a5cc3381947": "083c9c5891676a3281935972af32c058",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/15/a26e0e9fb647ffdb60bf02620172dbbdc78d0e": "5cb70760da6e623b21829e0e2e275ac7",
".git/objects/12/1ffabee97c9de190edb0c9d47bd1424f50787e": "7f59d4f28a2841f7cd3de9c7c959bc9b",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/40/c8b69c8291f1186081d1f115938589556757ad": "1eb7e15763b9b00c3edbbd0cc40a5e00",
".git/objects/13/5ea90ddd1189b0b1f7494fdab7f39e1453b5dc": "6f9945a54143da72453612adacee20a2",
".git/objects/7a/bff27483d23810aa5ccff0c2bdfdeb9d86644e": "e5668d1c538871c03bd173d2dc2adfd9",
".git/objects/8e/5e30a28b4435359945cf08b261c86d0de8da53": "6906b6f1c1183f6388ddf8a760f85a58",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/objects/22/8679e93dbb5228503c7b1d5091b9cce501dbcc": "682b73b7c11697f4246c5376cf4cba3d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d1aac05c11eb84d9622fa3abee71845e",
".git/logs/refs/heads/main": "d1aac05c11eb84d9622fa3abee71845e",
".git/logs/refs/remotes/origin/main": "0ea6c95dea43c73d86efe223deaa50b0",
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
".git/refs/heads/main": "3ac0ca3174d7bd6ab0949c3bbd1bebd3",
".git/refs/remotes/origin/main": "3ac0ca3174d7bd6ab0949c3bbd1bebd3",
".git/index": "a2b27ca7ccd5819716146609bc341225",
".git/COMMIT_EDITMSG": "33860b93eb29a2b3b5879870211b66a8",
"assets/AssetManifest.json": "094327cb9aafaa3ccf0843834398390a",
"assets/NOTICES": "32a09d00b4e7d2b4f4cc189ab0f6d361",
"assets/FontManifest.json": "e2c48bd9b3a619b6da7f44dd3c83f546",
"assets/AssetManifest.bin.json": "bbacc282d5f260b5c02abc9ef97e65e1",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "40469726c5ed792185741388e68dd9e8",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
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
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
