import Ember from 'ember';

export default Ember.Controller.extend({
  contextMenu: true,

  blocksWithCategories: [
    {
      category: 'Logic',
      blocks: ['controls_if', 'controls_if_else']
    },
    {
      category: 'Bloques adicionales',
      blocks: ['controls_repeat']
    }
  ],

  actions: {
    toggleContextMenu() {
      this.toggleProperty('contextMenu');
    }
  }

});
