'use strict';
importScripts('./node_modules/sw-toolbox/sw-toolbox.js');
toolbox.precache(["index.html","./assets/css/main.css"]);
toolbox.router.get('/images/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});