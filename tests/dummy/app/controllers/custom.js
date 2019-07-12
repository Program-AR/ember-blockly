import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  blockly: service(),
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
  },

});
