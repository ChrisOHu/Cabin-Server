'use strict';

import Homes from './Homes'
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  app.use('/homes', new Homes());

  const homesService = app.service('/homes');
  homesService.before(hooks.before);
  homesService.after(hooks.after);
};

