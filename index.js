/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-blockly',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + "/blockly-package/blockly_compressed.js");
    app.import(app.bowerDirectory + "/blockly-package/blocks_compressed.js");
    app.import(app.bowerDirectory + "/blockly-package/es.js");
    app.import(app.bowerDirectory + "/blockly-package/javascript_compressed.js");

    app.import(app.bowerDirectory + "/blockly-package/media/1x1.gif");
    app.import(app.bowerDirectory + "/blockly-package/media/click.mp3");
    app.import(app.bowerDirectory + "/blockly-package/media/click.ogg");
    app.import(app.bowerDirectory + "/blockly-package/media/click.wav");
    app.import(app.bowerDirectory + "/blockly-package/media/delete.mp3");
    app.import(app.bowerDirectory + "/blockly-package/media/delete.ogg");
    app.import(app.bowerDirectory + "/blockly-package/media/delete.wav");
    app.import(app.bowerDirectory + "/blockly-package/media/disconnect.mp3");
    app.import(app.bowerDirectory + "/blockly-package/media/disconnect.ogg");
    app.import(app.bowerDirectory + "/blockly-package/media/disconnect.wav");
    app.import(app.bowerDirectory + "/blockly-package/media/handclosed.cur");
    app.import(app.bowerDirectory + "/blockly-package/media/handdelete.cur");
    app.import(app.bowerDirectory + "/blockly-package/media/handopen.cur");
    app.import(app.bowerDirectory + "/blockly-package/media/quote0.png");
    app.import(app.bowerDirectory + "/blockly-package/media/quote1.png");
    app.import(app.bowerDirectory + "/blockly-package/media/sprites.png");
    app.import(app.bowerDirectory + "/blockly-package/media/sprites.svg");
  },
};
