import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  blockly: service(),

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
