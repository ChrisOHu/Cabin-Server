'use strict';

const service = require('feathers-mongoose');
const hosts = require('./hosts-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: hosts,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/hosts', service(options));

  // Get our initialize service to that we can bind hooks
  const hostsService = app.service('/hosts');

  // Set up our before hooks
  hostsService.before(hooks.before);

  // Set up our after hooks
  hostsService.after(hooks.after);
};
