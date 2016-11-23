'use strict';

import Hosts from './Hosts'
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  app.use('/hosts', new Hosts());

  const hostsService = app.service('/hosts');
  hostsService.before(hooks.before);
  hostsService.after(hooks.after);
};
