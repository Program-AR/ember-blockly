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
  flexboxColumn: false,

  blocksWithCategories: [
    {
      category: 'Logic',
      blocks: ['controls_if', 'controls_if_else']
    },
    {
      category: 'Bloques adicionales',
      blocks: ['controls_repeat']
    }
  ],

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
    },
    setAnotherWorkspace() {
      this.set('workspaceDemo2', '<xml xmlns="http://www.w3.org/1993/xhtml"><block type="controls_if_else" id="f`z3u2w:an2Q0tZL@R9Im(" x="180" y="127"></block></xml>');
    },
    onChangeWorkspace(workspace) {
      this.set('workspaceDemoReturned', workspace);
    },
    flipFlexboxDirection() {
      this.toggleProperty('flexboxColumn');
      setTimeout(() => {
        $(window).trigger('resize');
      }, 1);
    }
  }
});
