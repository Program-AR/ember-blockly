import Ember from 'ember';
import layout from '../templates/components/ember-blockly';


export default Ember.Component.extend({
  layout,
  disablePreloadAudio: true,
  classNames: ['ember-blockly-container'],
  blocks: [],
  current_blocks: Ember.computed.oneWay('blocks'),
  workspaceElement: null,
  workspace: '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>',
  showCode: false,

  withZoom: true,       // definirá el parámetro "zoom" al llamar a inject.
  withTrash: true,      // definirá el parámetro "trashcan" al llamar a inject.

  collapse: false,
  comments: true,
  css: true,
  disable: true,
  grid: false,
  horizontalLayout: false,
  maxBlocks: Infinity,
  mediaFolder: "blockly-package/media/",
  oneBasedIndex: true,
  readOnly: false,
  rtl: false,
  scrollbars: true,
  sounds: true,
  toolboxPosition: "start",

  /* Context menu options. */
  duplicate: true,
  help: true,
  comment: true,
  disableBlock: true,
  contextMenu: true,

  disableResize: false,

  lastContextMenuFunction: null,
  originalContextMenu: null,

  /* Highlighted block */
  highlightedBlock: null,

  observeContextMenu: Ember.observer('contextMenu', function() {

    if (this.get('contextMenu')) {
      this.enableContextMenu();
    } else {
      this.disableContextMenu();
    }
  }),

  observeBlocks: Ember.observer('blocks', function() {
    this.set('current_blocks', this.get('blocks'));
    this.updateToolbox(this.get('current_blocks'));
  }),

  observeWorkspace: Ember.observer('workspace', function() {

    let workspace = this.get('workspaceElement');
    let xml_text = this.get('workspace');

    workspace.clear();

    if (xml_text) {
      let dom = Blockly.Xml.textToDom(xml_text)
      Blockly.Xml.domToWorkspace(dom, workspace);
    }

  }),

  observeHighlightedBlock: Ember.observer('highlightedBlock', function() {
    this.get('workspaceElement').highlightBlock(this.get("highlightedBlock"));
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

       collapse: this.get("collapse"),
       comments: this.get("comments"),
       css: this.get("css"),
       disable: this.get("disable"),
       horizontalLayout: this.get("horizontalLayout"),
       maxBlocks: this.get("maxBlocks"),
       rtl: this.get("rtl"),
       media: this.get("mediaFolder"),
       oneBasedIndex: this.get("oneBasedIndex"),
       readOnly: this.get("readOnly"),
       scrollbars: this.get("scrollbars"),
       sounds: this.get("sounds"),
       toolboxPosition: this.get("toolboxPosition"),
     };

     if (this.get('grid')) {
       options['grid'] = this._get_default_grid();
     }

     if (this.get("withZoom")) {
       options['zoom'] = this._get_default_zoom();
     }

    let blocklyDiv = this.$().find("div")[0];
    let blocklyArea = this.$()[0];

    let workspace = Blockly.inject(blocklyDiv, options);
    workspace.traceOn(true); // Habilitar highlight

    this.set('workspaceElement', workspace);

    this.set('blocklyDiv', blocklyDiv);
    this.set('blocklyArea', blocklyArea);

    if (!this.get('contextMenu')) {
      this.disableContextMenu();
    }


    this.set('originalContextMenu', Blockly.ContextMenu.show);

    // Intenta modificar la función que muestra el menú para
    // habilitar o deshabilitar opciones.
    Blockly.ContextMenu.show = (a, b, c) => {
      b = this._filtrar_items_del_menu(b);
      this.get('originalContextMenu')(a, b, c);
    };

    $(window).bind("resize.blockly", () => {
      this._onresize();
    });

    workspace.addChangeListener(() => {
      this.onUpdate();
      this._onresize();
    });

    this._onresize();

    Ember.run.scheduleOnce('afterRender', () => {
      this.set('workspace', this.get('workspace') + ' ');
    });
  },

  /**
   * Procesa los items del menú contextual de blockly para habilitar o
   * deshabilitar algunas opciones.
   */
  _filtrar_items_del_menu(items) {
    return items.filter((i) => {

      if (i.text === Blockly.Msg.DUPLICATE_BLOCK) {
        i.enabled = this.get('duplicate');
      }

      if (i.text === Blockly.Msg.HELP) {
        i.enabled = this.get('help');
      }

      if (i.text === Blockly.Msg.ADD_COMMENT || i.text === Blockly.Msg.REMOVE_COMMENT) {
        i.enabled = this.get('comment');
      }

      if (i.text === Blockly.Msg.DISABLE_BLOCK || i.text === Blockly.Msg.ENABLE_BLOCK) {
        i.enabled = this.get('disableBlock');
      }

      return true;
    });
  },

  disableContextMenu() {
    this.set('lastContextMenuFunction', Blockly.ContextMenu.show);
    Blockly.ContextMenu.show = function() {};
  },

  enableContextMenu() {
    Blockly.ContextMenu.show = this.get('lastContextMenuFunction');
  },

  _get_default_grid() {
    return {
      spacing: 20,
      length: 3,
      colour: '#ccc',
      snap: true
    };
  },

  _get_default_zoom() {
    return {
      controls: true,
      wheel: false,
      startScale: 1.0,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2
    };
  },

  _onresize() {
    if (this.get('disableResize')) {
      return null;
    }

    let blocklyDiv = this.get('blocklyDiv');
    let blocklyArea = this.get('blocklyArea');
    let element = blocklyArea;
    let x = 0;
    let y = 0;

    // itera 'hacia arriba' en el dom para conocer el desplazamiento total.
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);

    blocklyDiv.style.left = `${x}px`;
    blocklyDiv.style.top = `${y}px`;
    blocklyDiv.style.width = `${blocklyArea.offsetWidth}px`;
    blocklyDiv.style.height = `${blocklyArea.offsetHeight}px`;
    Blockly.svgResize(this.get('workspaceElement'));
  },

  willDestroyElement() {
    $(window).unbind("resize.blockly");
  },

  onUpdate(event) {
    let xml = Blockly.Xml.workspaceToDom(this.get('workspaceElement'));
    let xml_text = Blockly.Xml.domToText(xml);
    this.sendAction("onChangeWorkspace", xml_text);

    if (this.get('showCode')) {
      let code = Blockly.JavaScript.workspaceToCode(this.get('workspaceElement'));
      this.set('javascriptCode', js_beautify(code));
    }

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

      if (bloque['category']) {
        toolbox.push(`<category name="${bloque.category}">`);

        bloque.blocks.forEach((bloque_en_categoria) => {

          if (!Blockly.Blocks[bloque_en_categoria]) {
            throw new Error(`This block named '${bloque_en_categoria}' don't exist.`);
          }

          toolbox.push(`  <block type="${bloque_en_categoria}"></block>`);
        });

        toolbox.push('</category>');
      } else {

        if (!Blockly.Blocks[bloque]) {
          throw new Error(`This block named '${bloque}' don't exist.`);
        }

        toolbox.push(`<block type="${bloque}"></block>`);
      }
    });


    toolbox.push('</xml>');

    return toolbox.join("\n");
  },

  updateToolbox(bloques) {
    let toolbox = null;

    // Si se envió un string XML, lo inserta directamente
    // como toolbox.
    if (/xml/.test(bloques)) {
      toolbox = bloques;
    } else {
      toolbox = this.createToolbox(this.get("current_blocks"));
    }

    this.get('workspaceElement').updateToolbox(toolbox);
  }
});
