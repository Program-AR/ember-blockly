import Ember from 'ember';

export default Ember.Controller.extend({
  blocks: [
           'section_control',
           'controls_if', 'controls_if_else', 'controls_whileUntil',

           'section_logic',
           'logic_compare', 'logic_operation', 'logic_boolean'
         ],
  highlightBlockId: '',
  workspace_xml: '',
  actions: {
    viewXML() {
      let xml = this.get("workspace_xml");
      console.log(xml);
      alert(xml);
    },
    highlightBlock() {
      this.set("highlightBlockId", window.prompt("id del bloque a resaltar"));
    },
    onChangeWorkspace(xml)
    {
      this.set("workspace_xml", xml);
    }
  }
});
