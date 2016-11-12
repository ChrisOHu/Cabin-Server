'use strict';

const service = require('feathers-mongoose');
const designers = require('./designers-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: designers,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/designers', service(options));

  // Get our initialize service to that we can bind hooks
  const designersService = app.service('/designers');

  // Set up our before hooks
  designersService.before(hooks.before);

  // Set up our after hooks
  designersService.after(hooks.after);
};
