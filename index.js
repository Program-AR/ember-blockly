'use strict';

module.exports = {
  name: 'ember-blockly',

  included: function (app) {
    this._super.included(app);
    app.import("node_modules/blockly-package/blockly_compressed.js");
    app.import("node_modules/blockly-package/blocks_compressed.js");
    app.import("node_modules/blockly-package/es.js");
    app.import("node_modules/blockly-package/javascript_compressed.js");
    app.import("node_modules/blockly-package/media/1x1.gif");
    app.import("node_modules/blockly-package/media/click.mp3");
    app.import("node_modules/blockly-package/media/click.ogg");
    app.import("node_modules/blockly-package/media/click.wav");
    app.import("node_modules/blockly-package/media/delete.mp3");
    app.import("node_modules/blockly-package/media/delete.ogg");
    app.import("node_modules/blockly-package/media/delete.wav");
    app.import("node_modules/blockly-package/media/disconnect.mp3");
    app.import("node_modules/blockly-package/media/disconnect.ogg");
    app.import("node_modules/blockly-package/media/disconnect.wav");
    app.import("node_modules/blockly-package/media/handclosed.cur");
    app.import("node_modules/blockly-package/media/handdelete.cur");
    app.import("node_modules/blockly-package/media/handopen.cur");
    app.import("node_modules/blockly-package/media/quote0.png");
    app.import("node_modules/blockly-package/media/quote1.png");
    app.import("node_modules/blockly-package/media/sprites.png");
    app.import("node_modules/blockly-package/media/sprites.svg");
  },
};