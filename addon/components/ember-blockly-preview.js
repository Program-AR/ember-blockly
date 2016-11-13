import Ember from 'ember';
import layout from '../templates/components/ember-blockly-preview';

export default Ember.Component.extend({
  layout,
  block: null,
  workspace: '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>',
  media: "blockly-package/media/",
  readOnly: true,

  blockObserver: Ember.observer('block', function() {
    this.clear_workspace();
    this.redraw_block();
  }),

  didInsertElement() {

    let options = {
       toolbox: "",
       trashcan: false,
       media: this.get("media"),
       readOnly: this.get('readOnly'),
       scrollbars: false,
     };

    let blocklyDiv = this.$().find("div")[0];
    let blocklyArea = this.$()[0];

    let workspace = Blockly.inject(blocklyDiv, options);

    this.set('workspace', workspace);
    this.redraw_block();

    Blockly.ContextMenu.show = (a, b, c) => {};
  },

  redraw_block() {
    let workspace = this.get('workspace');
    let block = this.get('block');

    if (!Blockly.Blocks[block]) {
      throw new Error(`This block named '${block}' don't exist.`);
    }

    let newBlock = workspace.newBlock(block);

    newBlock.initSvg();
    newBlock.render();
    newBlock.moveBy(15, 15);
  },

  clear_workspace() {
    this.get('workspace').clear();
  }

});
