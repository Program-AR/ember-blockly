import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  blocks: [
    'text_print', 'text',

    'section_control',
    'controls_if', 'controls_if_else', 'controls_whileUntil',

    'section_logic',
    'logic_compare', 'logic_operation', 'logic_boolean'
  ],

  blockly: service(),
  xml: '<xml><block type="al_comenzar" deletable="false" movable="false" x="20" y="20"></block></xml>',

  activar() {
    let blockly = this.get('blockly');

    blockly.createCustomBlock('al_comenzar', {
      message0: "Cuando comienza el programa",
      colour: '#ff5555',
      "message1": "hacer: %1",
      "args1": [
          {"type": "input_statement", "name": "DO"}
      ],
      code: `function cuando_inicia() { $DO };`
    });

    //a.appendStatementInput('program');
    this.get('blockly').setStartHat(true);
  },

});
