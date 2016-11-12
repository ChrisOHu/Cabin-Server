'use strict';

// hosts-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const CommonSchemas = require('../../common/schemas')
const Schema = mongoose.Schema;

const hostsSchema = new Schema({
  user:       CommonSchemas.userSnapshot,
  banner:     { type: String, required: false },
  intro:      { type: String, required: true },
  homes:      { type: [ CommonSchemas.homeSnapshot ] },
  followers:  { type: Number },
  reviews:    CommonSchemas.reviews,


  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const hostsModel = mongoose.model('hosts', hostsSchema);

module.exports = hostsModel;
