if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/5DopN5axeGgrP7UYzxKI1/_buildManifest.js",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/5DopN5axeGgrP7UYzxKI1/_middlewareManifest.js",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/5DopN5axeGgrP7UYzxKI1/_ssgManifest.js",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/chunks/74-ae04647259f9759a.js",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/chunks/74-ae04647259f9759a.js.map",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/chunks/a9a7754c-72d36e5b31c69b69.js",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/chunks/a9a7754c-72d36e5b31c69b69.js.map",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/chunks/cb1608f2-7641fd17963b128e.js",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/chunks/cb1608f2-7641fd17963b128e.js.map",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/chunks/framework-1b1477f9717fa649.js",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/chunks/framework-1b1477f9717fa649.js.map",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/chunks/main-33801cb5b302e082.js",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/chunks/main-33801cb5b302e082.js.map",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/chunks/pages/_app-89abb068711bdb44.js",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/chunks/pages/_app-89abb068711bdb44.js.map",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/chunks/pages/_error-8f217dcfc432571b.js",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/chunks/pages/_error-8f217dcfc432571b.js.map",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/chunks/pages/index-6ac728204d001b08.js",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/chunks/pages/index-6ac728204d001b08.js.map",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/chunks/webpack-511b8003cee1dc00.js",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/chunks/webpack-511b8003cee1dc00.js.map",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/css/5954b00ecfe8f513.css",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/css/5954b00ecfe8f513.css.map",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/css/d9b9271de77f51cc.css",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/_next/static/css/d9b9271de77f51cc.css.map",revision:"5DopN5axeGgrP7UYzxKI1"},{url:"/favicon.ico",revision:"8802bbec8d4697c7aa8ad1acec68e1a2"},{url:"/icon-192x192.png",revision:"af909bd2fc82d71e57a9f12d74204253"},{url:"/icon-256x256.png",revision:"e1719647609b1d2361546a3d9db3a574"},{url:"/icon-384x384.png",revision:"f4199971f858d4fce0c4a0081e5936c8"},{url:"/icon-512x512.png",revision:"2c27fc9975853d5c7774b4a671332a0c"},{url:"/manifest.json",revision:"b462d1c46c263e8f82e87dc8f02d47dc"},{url:"/sounds/alarm-clock-01.mp3",revision:"04c86b8ad8b81f33cd363ee8d7e24ae9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
//# sourceMappingURL=sw.js.map