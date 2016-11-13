import Ember from 'ember';

export default Ember.Controller.extend({
  blocks: ['controls_if', 'logic_compare', 'logic_boolean'],
  current_block: ['controls_if'],

  actions: {
    selectBlock(blockName) {
      this.set('current_block', blockName);
    }
  }
});
