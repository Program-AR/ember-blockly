import Ember from 'ember';
import layout from '../templates/components/ember-blockly';

export default Ember.Component.extend({
  layout,
  didInsertElement() {
    let toolboxElement = this.$().find('#toolbox')[0];
    let workspace = Blockly.inject('blocklyDiv', {toolbox: toolboxElement});
  }
});
