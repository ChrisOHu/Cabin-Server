'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('homes service', function() {
  it('registered the homes service', () => {
    assert.ok(app.service('homes'));
  });
});
