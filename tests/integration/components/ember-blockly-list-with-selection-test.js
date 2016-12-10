import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-blockly-list-with-selection', 'Integration | Component | ember blockly list with selection', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{ember-blockly-list-with-selection}}`);

  assert.equal(this.$().text().trim(), 'There is no blocks to show.');
});
