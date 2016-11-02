import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-blockly', 'Integration | Component | ember blockly', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{ember-blockly disableResize=true disablePreloadAudio=true scrollbars=false}}`);

  assert.ok(this.$());

});
