'use strict';

import Designers from './Designers'
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  app.use('/designers', new Designers());

  const designersService = app.service('/designers');
  designersService.before(hooks.before);
  designersService.after(hooks.after);
};

