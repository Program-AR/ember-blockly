/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    fingerprint: {
      exclude: ['media', 'iconos'],
    }
  });

  app.import("bower_components/blockly-package/blockly_compressed.js");
  app.import("bower_components/blockly-package/blocks_compressed.js");
  app.import("bower_components/blockly-package/es.js");
  app.import("vendor/beautify.js");

  return app.toTree();
};
