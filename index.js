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
  },
};
