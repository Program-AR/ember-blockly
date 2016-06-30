import Ember from 'ember';
import layout from '../templates/components/ember-blockly';

export default Ember.Component.extend({
  layout,
  didInsertElement() {
    let toolboxElement = this.$().find('#toolbox')[0];

    /*
    var toolbox = '<xml>';
    toolbox += '  <block type="controls_if"></block>';
    toolbox += '  <sep gap="8"></sep>';
    toolbox += '  <block type="controls_whileUntil"></block>';
    toolbox += '</xml>';
    */

    //debugger;
    //let workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox,
    let workspace = Blockly.inject('blocklyDiv', {toolbox: toolboxElement,
      zoom:
               {controls: true,
                wheel: false,
                startScale: 1.0,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.2},
           trashcan: true
    });
  }
});
