import Ember from 'ember';

export default Ember.Controller.extend({
  blockly: Ember.inject.service(),
  blocks: ['my-block', 'controls_if', 'logic_boolean'],

  activar() {
    let blockly = this.get('blockly');

    blockly.createCustomBlock('my-block', {
      message0: "hola?",
      colour: 160,
      previousStatement: true,
      nextStatement: true,
      code: "alert('hola?');"
    });

    blockly.createAlias('si', 'controls_if');
  },

});
