'use strict';

const service = require('feathers-mongoose');
const designs = require('./designs-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: designs,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/designs', service(options));

  // Get our initialize service to that we can bind hooks
  const designsService = app.service('/designs');

  // Set up our before hooks
  designsService.before(hooks.before);

  // Set up our after hooks
  designsService.after(hooks.after);
};
