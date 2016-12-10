import Ember from 'ember';
import layout from '../templates/components/ember-blockly-list-item';

export default Ember.Component.extend({
  layout,
  tagName: '',
  isSelected: Ember.computed('item', 'selected', function() {
    return this.get('item') === this.get('selected');
  })
});
