'use strict';
const designs = require('./designs');
const hosts = require('./hosts');
const designers = require('./designers');
const homes = require('./homes');
const authentication = require('./authentication');
const users = require('./users');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(users);
  app.configure(homes);
  app.configure(designers);
  app.configure(hosts);
  app.configure(designs);
};
