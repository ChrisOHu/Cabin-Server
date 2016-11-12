'use strict';

const service = require('feathers-mongoose');
const homes = require('./homes-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: homes,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/homes', service(options));

  // Get our initialize service to that we can bind hooks
  const homesService = app.service('/homes');

  // Set up our before hooks
  homesService.before(hooks.before);

  // Set up our after hooks
  homesService.after(hooks.after);
};
