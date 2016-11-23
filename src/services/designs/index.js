'use strict';

import Designs from './Designs'
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  app.use('/designs', new Designs());

  const designsService = app.service('/designs');
  designsService.before(hooks.before);
  designsService.after(hooks.after);
};

