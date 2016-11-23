'use strict';

import Users from './Users';
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  app.use('/users', new Users());

  const userService = app.service('/users');
  userService.before(hooks.before);
  userService.after(hooks.after);
};

