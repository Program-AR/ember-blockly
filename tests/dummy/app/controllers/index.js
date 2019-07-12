import Controller from '@ember/controller';

export default Controller.extend({
  blocks: [
           'text_print', 'text', 

           'section_control',
           'controls_if', 'controls_if_else', 'controls_whileUntil',

           'section_logic',
           'logic_compare', 'logic_operation', 'logic_boolean'
         ],
});
