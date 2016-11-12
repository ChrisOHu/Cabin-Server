'use strict';

// designers-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const CommonSchemas = require('../../common/schemas')
const Schema = mongoose.Schema;

const designersSchema = new Schema({
  user:       CommonSchemas.userSnapshot,
  banner:     { type: String, required: false },
  intro:      { type: String, required: true },
  designs:    { type: [ CommonSchemas.designSnapshot ] },
  followers:  { type: Number },
  reviews:    CommonSchemas.reviews,


  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const designersModel = mongoose.model('designers', designersSchema);

module.exports = designersModel;

