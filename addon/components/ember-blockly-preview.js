/*jshint esversion: 6 */
import { run } from '@ember/runloop';
import { observer } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/ember-blockly-preview';

export default Component.extend({
  layout,
  block: null,
    classNames: ['ember-blockly-container'],
  workspace: '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>',
  mediaFolder: "blockly-package/media/",
  readOnly: true,
  showCode: false,
  javascriptCode: '',

  blockObserver: observer('block', function() {
    this.clear_workspace();
    this.redraw_block();
  }),

  didInsertElement() {

    let options = {
       toolbox: "",
       trashcan: false,
       media: this.get("mediaFolder"),
       readOnly: this.get('readOnly'),
       scrollbars: false,
     };

    let blocklyDiv = this.$().find("div")[0];
    let blocklyArea = this.$()[0];

    let workspace = Blockly.inject(blocklyDiv, options);

    this.set('workspace', workspace);
    this.redraw_block();

    Blockly.ContextMenu.show = (a, b, c) => {};

    workspace.addChangeListener(() => {
      run(() => {
        this.onUpdate();
      });
    });
  },

  onUpdate(event) {
    let xml = Blockly.Xml.workspaceToDom(this.get('workspace'));
    let xml_text = Blockly.Xml.domToText(xml);

    if (this.get('showCode')) {
      let code = Blockly.JavaScript.workspaceToCode(this.get('workspace'));
      this.set('javascriptCode', js_beautify(code));
    }

    if (this.onChangeWorkspace)
      this.onChangeWorkspace(xml_text);
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
