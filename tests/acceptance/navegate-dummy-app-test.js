import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | navegate dummy app');

function visitAndCheck(route, assert) {
  visit(route);

  andThen(function() {
    return assert.equal(currentURL(), route, `this route is '${route}' as spected.`);
  });
}

test('visiting /', function(assert) {

  visitAndCheck('/', assert);
  visitAndCheck('/flexbox', assert);
  visitAndCheck('/parameters', assert);
  visitAndCheck('/context', assert);
  visitAndCheck('/categories', assert);
  visitAndCheck('/contextMenu', assert);
  visitAndCheck('/highlight', assert);
  visitAndCheck('/preview', assert);
  visitAndCheck('/custom', assert);
  visitAndCheck('/complexCustom', assert);
  visitAndCheck('/helperCustom', assert);
  visitAndCheck('/blocksCatalog', assert);
});
