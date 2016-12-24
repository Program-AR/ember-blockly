import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-blockly-catalog', 'Integration | Component | ember blockly catalog', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{ember-blockly-catalog}}`);
  assert.ok(this.$().text().trim());
});
