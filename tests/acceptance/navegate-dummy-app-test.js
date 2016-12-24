import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | navegate dummy app');


test('visiting /', function(assert) {

	function visitAndCheck(route, assert) {
		return visit(route).then(function() {
			 return assert.equal(currentURL(), route, `this route is ${route} as spected`);
		});
	}

	visitAndCheck('/', assert)
    .then(function () {
		  return visitAndCheck('/flexbox', assert);
    })
    .then(function () {
		  return visitAndCheck('/parameters', assert);
    })
    .then(function () {
		  return visitAndCheck('/categories', assert);
    })
    .then(function () {
		  return visitAndCheck('/contextMenu', assert);
    })
    .then(function () {
		  return visitAndCheck('/highlight', assert);
    })
    .then(function () {
		  return visitAndCheck('/preview', assert);
    })
    .then(function () {
		  return visitAndCheck('/custom', assert);
    })
    .then(function () {
		  return visitAndCheck('/complexCustom', assert);
    })
    .then(function () {
		  return visitAndCheck('/helperCustom', assert);
    })
    .then(function () {
		  return visitAndCheck('/blocksCatalog', assert);
    })
    .then(function () {
		  return visitAndCheck('/dropdown', assert);
    });

});
