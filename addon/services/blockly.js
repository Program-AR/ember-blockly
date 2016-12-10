import Ember from 'ember';

export default Ember.Service.extend({

  createCustomBlock(name, options) {
    let previousStatement = true;
    let nextStatement = true;
    let colour = 160;

    if (Blockly.Blocks[name]) {
      console.warn(`Redefiniendo el bloque ${name}`);
    }

    Blockly.Blocks[name] = {
      init: function() {
        this.jsonInit(options);
      }
    };

    Blockly.Blocks[name].isCustomBlock = true;

    if (!Blockly.MyLanguage) {
      Blockly.MyLanguage = Blockly.JavaScript;
    }

    if (options.code) {
      Blockly.MyLanguage[name] = function(block) {
        let variables = options.code.match(/\$(\w+)/g);
        let code = options.code;

        if (variables) {
          variables.forEach((v) => {
            let regex = new RegExp('\\' + v, "g");
            let variable_name = v.slice(1);

            var variable_object = Blockly.MyLanguage.valueToCode(block, variable_name) || block.getFieldValue(variable_name) || null;

            code = code.replace(regex, variable_object);
          });
        }

        return code;
      };
    }

  },

  createCustomBlockWithHelper(name, options) {
    let color = goog.color.hexToHsv('#4a6cd4');

    this.createCustomBlock(name, {
      message0: `%1 ${options.descripcion}`,
      colour: color,
      previousStatement: true,
      nextStatement: true,
      args0: [
        {
          "type": "field_image",
          "src": `iconos/${options.icono}`,
          "width": 16,
          "height": 16,
          "alt": "*"
        }
      ],
      code: `hacer(actor_id, "${options.comportamiento}", ${options.argumentos});`,
    });
  },

  getBlocksList() {
    return Object.keys(Blockly.Blocks);
  },

  getCustomBlocksList() {
    return Object.keys(Blockly.Blocks).filter((e) => {
      return Blockly.Blocks[e].isCustomBlock}
    );
  },

  createAlias(new_name, original_block_name) {
    let original_block = Blockly.Blocks[original_block_name];
    Blockly.Blocks[new_name] = Object.assign({}, original_block);
    Blockly.Blocks[new_name].isCustomBlock = true;

    if (!Blockly.MyLanguage) {
      Blockly.MyLanguage = Blockly.JavaScript;
    }

    Blockly.MyLanguage[new_name] = Blockly.JavaScript[original_block_name];

  }
});
