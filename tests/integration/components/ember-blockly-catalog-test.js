import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-blockly-catalog', 'Integration | Component | ember blockly catalog', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{ember-blockly-catalog}}`);

  assert.equal(this.$().text().trim(), 'There is no blocks to show.');

});
