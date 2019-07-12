import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  blockly: service(),
  blocks: ['my-block-withParams', 'text'],

  activar() {
    let blockly = this.get('blockly');

    blockly.createCustomBlock('my-block-withParams', {
      message0: "show this text %1 in a window",
      args0: [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "String"
        }
      ],
      colour: 160,
      previousStatement: true,
      nextStatement: true,
      code: "alert($VALUE);"
    });
  },

});
