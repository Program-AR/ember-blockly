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

  p = p.then(function () {
		return visitAndCheck('/flexbox', assert);
  });

  p = p.then(function () {
		return visitAndCheck('/parameters', assert);
  });

  p = p.then(function () {
		return visitAndCheck('/categories', assert);
  });

  p = p.then(function () {
		return visitAndCheck('/contextMenu', assert);
  });

  p = p.then(function () {
		return visitAndCheck('/highlight', assert);
  });

  p = p.then(function () {
		return visitAndCheck('/preview', assert);
  });

  p = p.then(function () {
		return visitAndCheck('/custom', assert);
  });

  p = p.then(function () {
		return visitAndCheck('/complexCustom', assert);
  });

  p = p.then(function () {
		return visitAndCheck('/helperCustom', assert);
  });

  p = p.then(function () {
		return visitAndCheck('/blocksCatalog', assert);
  });

  p = p.then(function () {
		return visitAndCheck('/dropdown', assert);
  });


});
