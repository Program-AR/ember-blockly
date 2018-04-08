import Ember from 'ember';

export default Ember.Controller.extend({
  contextMenu: true,
  duplicate: true,
  help: true,
  comment: true,
  disableBlock: true,

  blocksWithCategories: [
    {
      category: 'Logic',
      blocks: ['controls_if', 'controls_if_else']
    },
    {
      isSeparator: true
    },
    {
      category: 'Bloques adicionales',
      blocks: ['controls_repeat']
    }
  ],

  actions: {
    toggleContextMenu() {
      this.toggleProperty('contextMenu');
    },
    toggleDuplicate() {
      this.toggleProperty('duplicate');
    },
    toggleComment() {
      this.toggleProperty('comment');
    },
    toggleHelp() {
      this.toggleProperty('help');
    },
    toggleDisable() {
      this.toggleProperty('disableBlock');
    },
  }

});
