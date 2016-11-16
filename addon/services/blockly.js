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
        /*
          {
          "message0": message, //'Decir %1',
          "message1": "otro %1 ahora ",
          "message2": "más",

          "args1": [
            {
              "type": "input_value",
              "name": "mensaje",
              "check": "String"
            }
          ],

          "previousStatement": previousStatement,
          "nextStatement": nextStatement,
          "colour": colour
        });
        */

      }
    };


    if (!Blockly.MyLanguage) {
      Blockly.MyLanguage = Blockly.JavaScript;
    }


    if (options.code) {
      Blockly.MyLanguage[name] = function(/*block*/) {
        //var segundos = Blockly.MyLanguage.valueToCode(block, 'segundos') || null;
        //let programa = Blockly.JavaScript.statementToCode(block, 'program');
        //let codigo = `${programa}`;

        return options.code;
      };
    }



    /*
    name: 'my-block',
    descripcion: 'Mover abajo',
    icono: '../../iconos/abajo.png',
    comportamiento: 'MoverACasillaAbajo',
    argumentos: '{}',
    */

  }
});
