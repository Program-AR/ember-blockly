module.exports = {
  name: 'ember-blockly',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + "/blockly-package/blockly_compressed.js");
    app.import(app.bowerDirectory + "/blockly-package/blocks_compressed.js");
    app.import(app.bowerDirectory + "/blockly-package/es.js");
  },

  normalizeEntityName: function() {},

  afterInstall: function() {
    var that = this;

    return this.addBowerPackageToProject('blockly-package').then(function() {
        return that.addBowerPackageToProject('blockly-package');
    });
  }
};
