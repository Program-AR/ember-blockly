import { currentURL, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | navegate dummy app', function (hooks) {
      setupApplicationTest(hooks);

      function visitAndCheck(route, assert) {
            return visit(route).then(function () {
                  return assert.equal(currentURL(), route, `this route is ${route} as spected`);
            });
      }

      test('visiting /', function (assert) {
            return visitAndCheck('/', assert);
      });

      test('visiting /flexbox', function (assert) {
            return visitAndCheck('/flexbox', assert);
      });

      test('visiting /parameters', function (assert) {
            return visitAndCheck('/parameters', assert);
      });

      test('visiting /categories', function (assert) {
            return visitAndCheck('/categories', assert);
      });

      test('visiting /contextMenu', function (assert) {
            return visitAndCheck('/contextMenu', assert);
      });

      test('visiting /highlight', function (assert) {
            return visitAndCheck('/highlight', assert);
      });

      test('visiting /preview', function (assert) {
            return visitAndCheck('/preview', assert);
      });

      test('visiting /custom', function (assert) {
            return visitAndCheck('/custom', assert);
      });

      test('visiting /complexCustom', function (assert) {
            return visitAndCheck('/complexCustom', assert);
      });

      test('visiting /helperCustom', function (assert) {
            return visitAndCheck('/helperCustom', assert);
      });

      test('visiting /blocksCatalog', function (assert) {
            return visitAndCheck('/blocksCatalog', assert);
      });

      test('visiting /dropdown', function (assert) {
            return visitAndCheck('/dropdown', assert);
      });

});
