/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
  });

  app.import("vendor/blockly_compressed.js");
  app.import("vendor/blocks_compressed.js");

  return app.toTree();
};
