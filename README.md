Intl Polyfill for Node.js and Jest

Node.js 0.12 has the Intl APIs built-in, but only includes the English locale data by default. If your app needs to support more locales than English, you'll need to build or configure Node with the extra locale data, or polyfill the runtime.

Node.js versions prior to 0.12 don't provide the Intl APIs, so they require that the runtime is polyfilled.

While running Jest tests, the global.Intl is not initilized thus global.Intl must be polyfilled to test locales other than 'en'.

How to Polyfill Node.js and Jest

```javascript
  var loadIntlLocales = require('@getitmarked/intl-polyfill');
  loadIntlLocales(['ja', 'de-DE']);
```



