import Ember from 'ember';

export default Ember.Controller.extend({
  blocks: [
           'section_control',
           'controls_if', 'controls_if_else', 'controls_whileUntil',

           'section_logic',
           'logic_compare', 'logic_operation', 'logic_boolean'
         ],
  workspaceDemo2: '',
  blocksDemo2: ['controls_if'],

  actions: {
    setSimpleToolbar() {
      this.set('blocksDemo2', ['controls_if']);
    },
    setOtherToolbar() {
      this.set('blocksDemo2', [
           'section_control',
           'controls_if', 'controls_if_else', 'controls_whileUntil',
      ]);
    },
    clearWorkspace() {
      this.set('workspaceDemo2', "");
    },
    setASimpleWorkspace() {
      this.set('workspaceDemo2', '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_if" id="f`z3uw:anQ0tZL@R9Im(" x="80" y="27"></block></xml>');
    }
  }
});
