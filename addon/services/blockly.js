import Ember from 'ember';

export default Ember.Service.extend({

  createCustomBlock(name, options, callback_to_change_block) {
    let previousStatement = true;
    let nextStatement = true;
    options.colour = options.color || '#4453ff';

    if (Blockly.Blocks[name]) {
      console.warn(`Redefiniendo el bloque ${name}`);
    }

    Blockly.Blocks[name] = {
      init: function() {
        this.jsonInit(options);

        if (callback_to_change_block) {
          callback_to_change_block.call(this);
        }

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

    return Blockly.Blocks[name]
  },

  createBlockWithAsyncDropdown(name, options) {
    function callback_to_change_block() {
      this.
        appendDummyInput().
        appendField(options.label || "").
        appendField(new Blockly.FieldDropdown(options.callbackDropdown), 'DROPDOWN_VALUE');
    }

    return this.createCustomBlock(name, options, callback_to_change_block);
  },

  createCustomBlockWithHelper(name, options) {
    let color = options.color || '#4a6cd4';

    return this.createCustomBlock(name, {
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

  createBlockValue(name, options) {
    let color = options.color || '#4a6cd4';

    return this.createCustomBlock(name, {
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
      code: `'${options.valor}'`,
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

    return Blockly.Blocks[new_name];
  }
});
