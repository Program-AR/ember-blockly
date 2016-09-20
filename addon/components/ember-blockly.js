import Ember from 'ember';
import layout from '../templates/components/ember-blockly';


export default Ember.Component.extend({
  layout,
  withZoom: true,
  withTrash: true,
  disablePreloadAudio: true,
  classNames: ['ember-blockly-container'],
  blocks: [],
  current_blocks: Ember.computed.oneWay('blocks'),
  workspaceElement: null,
  workspace: '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>',
  isInternalWorkspaceChange: false,

  observeBlocks: Ember.observer('blocks', function() {
    this.set('current_blocks', this.get('blocks'));
    this.updateToolbox(this.get('current_blocks'));
  }),

  observeWorkspace: Ember.observer('workspace', function() {

    if (this.get('isInternalWorkspaceChange')) {
      return;
    }

    let workspace = this.get('workspaceElement');
    let xml_text = this.get('workspace');

    workspace.clear();

    if (xml_text) {
      let dom = Blockly.Xml.textToDom(xml_text)
      Blockly.Xml.domToWorkspace(dom, workspace);
    }

  }),

  didInsertElement() {
    if (this.get('disablePreloadAudio')) {
      Blockly.WorkspaceSvg.prototype.preloadAudio_ = function() {};
    }

    this.createSection("section_control", "Control");
    this.createSection("section_logic", "Lógica");

    let toolbox = this.createToolbox(this.get("current_blocks"));

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

    let blocklyDiv = this.$().find("div")[0];
    let blocklyArea = this.$()[0];

    let workspace = Blockly.inject(blocklyDiv, options);
    this.set('workspaceElement', workspace);

    this.set('blocklyDiv', blocklyDiv);
    this.set('blocklyArea', blocklyArea);

    window.addEventListener('resize', () => {
      this._onresize();
    }, false);

    workspace.addChangeListener(() => {
      this.onUpdate();
      this._onresize();
    });

    this._onresize();
    Blockly.svgResize(workspace);
  },

  _onresize() {
    let blocklyDiv = this.get('blocklyDiv');
    let blocklyArea = this.get('blocklyArea');
    let element = blocklyArea;
    let x = 0;
    let y = 0;

    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);

    blocklyDiv.style.left = `${x}px`;
    blocklyDiv.style.top = `${y}px`;
    blocklyDiv.style.width = `${blocklyArea.offsetWidth}px`;
    blocklyDiv.style.height = `${blocklyArea.offsetHeight}px`;
  },

  willDestroyElement() {
    //this.get('workspaceElement').removeChangeListener(this.onUpdate);
  },

  onUpdate(event) {
    this.set('isInternalWorkspaceChange', true);
    let xml = Blockly.Xml.workspaceToDom(this.get('workspaceElement'));
    let xml_text = Blockly.Xml.domToText(xml);
    this.set('workspace', xml_text);
    this.set('isInternalWorkspaceChange', false);
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
