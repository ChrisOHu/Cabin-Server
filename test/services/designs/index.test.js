'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('designs service', function() {
  it('registered the designs service', () => {
    assert.ok(app.service('designs'));
  });
});
