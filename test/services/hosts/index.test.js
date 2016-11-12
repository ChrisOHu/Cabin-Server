'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('hosts service', function() {
  it('registered the hosts service', () => {
    assert.ok(app.service('hosts'));
  });
});
