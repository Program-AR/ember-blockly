module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    var that = this;

    return this.addBowerPackageToProject('blockly-package').then(function() {
        return that.addBowerPackageToProject('blockly-package');
    });
  }
};
