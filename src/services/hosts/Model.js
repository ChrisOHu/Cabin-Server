'use strict';

// hosts-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const CommonSchemas = require('../../common/schemas')
const Schema = mongoose.Schema;

const hostsSchema = new Schema({
  userId:     { type: Schema.Types.ObjectId, required: true, unique: true },
  banner:     { type: String },
  intro:      { type: String },
  homes:      { type: [ CommonSchemas.homeSnapshot ] },
  followers:  { type: [ Schema.Types.ObjectId ] },
  reviews:    CommonSchemas.reviews,


  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const hostsModel = mongoose.model('hosts', hostsSchema);

module.exports = hostsModel;
