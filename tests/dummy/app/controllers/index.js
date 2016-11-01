import Ember from 'ember';

export default Ember.Controller.extend({
  blocks: [
           'section_control',
           'controls_if', 'controls_if_else', 'controls_whileUntil',

           'section_logic',
           'logic_compare', 'logic_operation', 'logic_boolean'
         ],
});
