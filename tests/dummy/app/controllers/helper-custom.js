import Ember from 'ember';

export default Ember.Controller.extend({
  blockly: Ember.inject.service(),
  blocks: ['PatearPelota', 'text'],

  activar() {
    let blockly = this.get('blockly');

    blockly.createCustomBlockWithHelper('PatearPelota', {
      descripcion: 'Patear pelota',
      icono: 'iconos.pelota.png',
      comportamiento: 'DesencadenarComportamientoSiColisiona',
      argumentos: '{"comportamiento": SerPateado, idTransicion: "patear"}',
    });
  },

});
