import Ember from 'ember';
import layout from '../templates/components/ember-blockly';

export default Ember.Component.extend({
  layout,
  withZoom: true,
  withTrash: true,
  classNames: ['ember-blockly-container'],
  blocks: [],
  current_blocks: Ember.computed.oneWay('blocks'),
  workspaceElement: null,
  workspace: '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>',

  observeBlocks: Ember.observer('blocks', function() {
    this.set('current_blocks', this.get('blocks'));
    console.log("Cambiaron los bloques!");
    this.updateToolbox(this.get('current_blocks'));
  }),

  observeWorkspace: Ember.observer('workspace', function() {
    console.log("Cambió el workspace");
  }),

  didInsertElement() {

    this.createSection("section_control", "Control");
    this.createSection("section_logic", "Lógica");

    let toolbox = this.createToolbox(this.get("current_blocks"));

      /*

      */

    let options = {
       toolbox: toolbox,
       trashcan: this.get("withTrash"),
     };

     if (this.get("withZoom")) {
       options['zoom'] = {
         controls: true,
         wheel: false,
         startScale: 1.0,
         maxScale: 3,
         minScale: 0.3,
         scaleSpeed: 1.2
       };
     }

    let element = this.$().find("div")[0];

    let workspace = Blockly.inject(element, options);
    this.set('workspaceElement', workspace);

    workspace.addChangeListener(() => {
      this.onUpdate();
    });
  },

  willDestroyElement() {
    //this.get('workspaceElement').removeChangeListener(this.onUpdate);
  },

  onUpdate(event) {
    let xml = Blockly.Xml.workspaceToDom(this.get('workspaceElement'));
    let xml_text = Blockly.Xml.domToText(xml);
    this.set('workspace', xml_text);
  },

  createSection(name, label) {
    Blockly.Blocks[name] = {
      init: function() {
        this.appendDummyInput().appendField(`  ${label}  `);
        this.setOutput(false);
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.setDisabled(true);
      }
    };
  },

  createToolbox(bloques) {
    let toolbox = [];

    toolbox.push('<xml>');

    bloques.forEach((bloque) => {
      toolbox.push(`<block type="${bloque}"></block>`);
    });

    toolbox.push('</xml>');

    return toolbox.join("\n");
  },

  updateToolbox(bloques) {
    let toolbox = this.createToolbox(this.get("current_blocks"));
    this.get('workspaceElement').updateToolbox(toolbox);
  }
});
