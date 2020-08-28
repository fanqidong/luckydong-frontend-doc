/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "290752e758f8b0e8fa768702925752e8"
  },
  {
    "url": "assets/css/0.styles.5652b207.css",
    "revision": "1eeb98ffa325d2addf53d710f88c4cb5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9bc4e936.js",
    "revision": "cf452ffc587218e97460e3d76bd12f3e"
  },
  {
    "url": "assets/js/11.f10648f8.js",
    "revision": "52ba48acf460a9a1f6ce03af1479da8a"
  },
  {
    "url": "assets/js/12.259a7f06.js",
    "revision": "ef3a25b9a21e28e9c9448d393bcd9c6a"
  },
  {
    "url": "assets/js/13.82010fcb.js",
    "revision": "db74a55fd7a82ae01dc770354aa040ed"
  },
  {
    "url": "assets/js/14.82a4fb53.js",
    "revision": "c19db82a031620dc41eaf348e7e3f599"
  },
  {
    "url": "assets/js/15.7a5d1c9e.js",
    "revision": "86f227fd1cf5c6386516ef370d724bfc"
  },
  {
    "url": "assets/js/16.23e9f756.js",
    "revision": "89f39972c4d4c9beeb77f4708b098e1a"
  },
  {
    "url": "assets/js/4.b6374d77.js",
    "revision": "bd6b08edfe432a490987e4c887457307"
  },
  {
    "url": "assets/js/5.cde9ce64.js",
    "revision": "b43f7deaeb3bd256c13210037bc5d790"
  },
  {
    "url": "assets/js/6.eba907c0.js",
    "revision": "ea802fefaefa000156d1810de7918dbb"
  },
  {
    "url": "assets/js/7.db3dfd53.js",
    "revision": "0d5dfba7c763f1c63e56c1786b6dcb71"
  },
  {
    "url": "assets/js/8.3ec5b3dd.js",
    "revision": "6b5c5b1f90e08651d3073b3909da278f"
  },
  {
    "url": "assets/js/9.884febe2.js",
    "revision": "dc5f4ff6e16e7e91ad95912bb9065790"
  },
  {
    "url": "assets/js/app.ef52d798.js",
    "revision": "7f036990d5d678a3db68b1bf60595a2d"
  },
  {
    "url": "assets/js/vendors~docsearch.02b45572.js",
    "revision": "f5f3a74ff3aa6a503d72919490ac7a67"
  },
  {
    "url": "assets/js/vendors~flowchart.3bd4ba68.js",
    "revision": "b112b6b2b31ad2cf8af3e542a51f769d"
  },
  {
    "url": "CSS/cli.html",
    "revision": "4ade042fc2077a54bfb80506c5aebde9"
  },
  {
    "url": "CSS/node.html",
    "revision": "474de70f8bdc678654050f03150951d7"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "HTML/html-deepac.html",
    "revision": "628c84b3cf5470dcb18849cd17e094bc"
  },
  {
    "url": "HTML/html-guide.html",
    "revision": "66cb6b3af614f992fc4b9f9b6d6d3092"
  },
  {
    "url": "HTML/index.html",
    "revision": "00d28786bd7c0e479ed4e4b74f55dd98"
  },
  {
    "url": "index.html",
    "revision": "faaca598043ae0f88d7b578939e0f647"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "plugin/official.html",
    "revision": "d61547ec80e151e34edfd9562f7ce6cf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
