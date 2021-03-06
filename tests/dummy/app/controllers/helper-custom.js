import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  blockly: service(),
  blocks: ['PatearPelota', 'text', 'si', 'int'],
  blocks_with_value: ['ParaLaDerecha'],


  activar() {
    let blockly = this.get('blockly');

    blockly.createAlias('si', 'controls_if');
    blockly.createAlias('int', 'math_number');

    blockly.createCustomBlockWithHelper('PatearPelota', {
      descripcion: 'Patear pelota',
      icono: 'iconos.pelota.png',
      comportamiento: 'DesencadenarComportamientoSiColisiona',
      argumentos: '{"comportamiento": SerPateado, idTransicion: "patear"}',
    });

    blockly.createBlockValue('ParaLaDerecha', {
      descripcion: 'la derecha',
      icono: 'iconos.derecha.png',
      valor: 'DirCasillaDerecha',
    });

  },

});
