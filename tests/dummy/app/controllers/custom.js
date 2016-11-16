import Ember from 'ember';

export default Ember.Controller.extend({
  blockly: Ember.inject.service(),

  activar() {
    let blockly = this.get('blockly');

    blockly.createCustomBlock('my-block', {
      message0: "hola?",
      colour: 160,
      code: "hacer(actor_id, 'MoverACasillaAbajo', {velocidad: $mensaje});"
    });

  }
});
