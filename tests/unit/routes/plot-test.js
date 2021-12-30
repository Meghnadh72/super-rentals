import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | plot', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:plot');
    assert.ok(route);
  });
});
