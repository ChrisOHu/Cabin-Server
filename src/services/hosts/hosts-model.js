'use strict';

// hosts-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const CommonSchemas = require('../../common/schemas')
const Schema = mongoose.Schema;

const hostsSchema = new Schema({
  user:       { type: CommonSchemas.userSnapshot, required: true },
  banner:     { type: String, required: false },
  intro:      { type: String, required: true },
  homes:      [ CommonSchemas.homeSnapshot ],
  followers:  { type: Number },
  reviews:    { type: CommonSchemas.reviews },


  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const hostsModel = mongoose.model('hosts', hostsSchema);

module.exports = hostsModel;
