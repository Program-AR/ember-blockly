import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/ember-blockly-list-item';

export default Component.extend({
  layout,
  tagName: '',
  isSelected: computed('item', 'selected', function() {
    return this.get('item') === this.get('selected');
  })
});
