'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('designers service', function() {
  it('registered the designers service', () => {
    assert.ok(app.service('designers'));
  });
});
