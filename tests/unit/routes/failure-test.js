import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | failure', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:failure');
    assert.ok(route);
  });
});
