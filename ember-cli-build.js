'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  var app = new EmberAddon(defaults, {
    fingerprint: {
      exclude: ['media', 'iconos'],
    }
  });

  app.import("node_modules/blockly-package/blockly_compressed.js");
  app.import("node_modules/blockly-package/blocks_compressed.js");
  app.import("node_modules/blockly-package/es.js");
  app.import("vendor/beautify.js");

  return app.toTree();
};
