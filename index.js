'use strict';

var areIntlLocalesSupported = require('intl-locales-supported');

module.exports = loadIntlLocales;

function loadIntlLocales(locales) {
  console.log('loadIntlLocales loadIntlLocales');

  if (!locales) {
    throw new Error('locales must be supplied.');
  }

  if (!Array.isArray(locales)) {
    locales = [locales];
  }

  if (global.Intl) {
    console.log('global.Intl exists');
    // Determine if the built-in `Intl` has the locale data we need.
    if (!areIntlLocalesSupported(locales)) {
      // `Intl` exists, but it doesn't have the data we need, so load the
      // polyfill and patch the constructors we need with the polyfill's.
      var IntlPolyfill    = require('intl');
      Intl.NumberFormat   = IntlPolyfill.NumberFormat;
      Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
    }
  } else {
    // No `Intl`, so use and load the polyfill.
    console.log('No `Intl`, so use and load the polyfill.');
    global.Intl = require('intl');
  }

}