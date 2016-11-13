import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-blockly-preview', 'Integration | Component | ember blockly preview', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{ember-blockly-preview block='controls_if'}}`);
  assert.ok(this.$());
});
