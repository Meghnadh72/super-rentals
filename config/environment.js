'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'super-rentals',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
        EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  ENV.MAPBOX_ACCESS_TOKEN =
    'pk.eyJ1IjoibWVnaG5hZGg3MiIsImEiOiJja3g1dzg0ZWUxYjNvMm9vMXJkMWpsd2p5In0.VR5PbwLxvAtDQ2Jt7O7W9Q';
  ENV.FLASK_FETCHURL = 'http://172.17.0.4:1234/';
  //ENV.FLASK_FETCHURL = 'http://192.168.0.8:1234/';
  return ENV;
};
