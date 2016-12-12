import Ember from 'ember';
import layout from '../templates/components/ember-blockly-catalog';

export default Ember.Component.extend({
  layout,
  blockly: Ember.inject.service(),
  onlyCustom: true,
  showCode: true,
  current_block: '',

  cantidad: Ember.computed('blocks.length', function() {
    return this.get('blocks.length');
  }),

  blocks: Ember.computed('onlyCustom', function() {
    if (this.get('onlyCustom')) {
      return this.get('blockly').getCustomBlocksList();
    } else {
      return this.get('blockly').getBlocksList();
    }
  }),

  actions: {
    onSelect(item) {
      this.set('current_block', item);
    }
  }


});
