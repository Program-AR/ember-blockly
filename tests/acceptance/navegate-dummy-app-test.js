import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | navegate dummy app');


test('visiting /', function(assert) {

	function visitAndCheck(route, assert) {
		return visit(route).then(function() {
			 return assert.equal(currentURL(), route, `this route is ${route} as spected`);
		});
	}


	let p = visitAndCheck('/', assert);

  p = p.then(function() {
		return visitAndCheck('/flexbox', assert);
	});


  /*
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
  visitAndCheck('/dropdown', assert);
*/

});
