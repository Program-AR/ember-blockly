/*jshint esversion: 6 */
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import layout from '../templates/components/ember-blockly-catalog';

export default Component.extend({
  layout,
  blockly: service(),
  onlyCustom: true,
  showCode: true,
  current_block: '',

  cantidad: computed('blocks.length', function () {
    return this.get('blocks.length');
  }),

  blocks: computed('onlyCustom', function () {
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
