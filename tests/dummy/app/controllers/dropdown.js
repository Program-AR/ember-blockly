import Ember from 'ember';

export default Ember.Controller.extend({
  blockly: Ember.inject.service(),

  activar() {
    let blockly = this.get('blockly');

    function getDropdownValues() {
      return [
        ['Ninguna', 'sin_imagen.png'],
        [{'src': 'iconos/iconos.pelota.png', 'width': 16, 'height': 16, 'alt': 'pelota'}, 'pelota.png']
      ];
    }

    blockly.createBlockWithAsyncDropdown('sample-dropdown', {
      label: "Cambiar imagen por ",
      previousStatement: true,
      nextStatement: true,
      callbackDropdown: getDropdownValues,
      code: 'alert("Ha seleccionado la imagen: $DROPDOWN_VALUE")'
    });
  },

});
