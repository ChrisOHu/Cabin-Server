'use strict';

// designers-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const CommonSchemas = require('../../common/schemas')
const Schema = mongoose.Schema;

const designersSchema = new Schema({
  userId:     { type: Schema.Types.ObjectId, required: true, unique: true },
  banner:     { type: String },
  intro:      { type: String },
  designs:    { type: [ Schema.Types.ObjectId ] },
  followers:  { type: [ Schema.Types.ObjectId ] },
  reviews:    CommonSchemas.reviews,


  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const designersModel = mongoose.model('designers', designersSchema);

module.exports = designersModel;

