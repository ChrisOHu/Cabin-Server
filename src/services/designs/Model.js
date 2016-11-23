'use strict';

// designs-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const CommonSchemas = require('../../common/schemas')
const Schema = mongoose.Schema;

const designsSchema = new Schema({
  designerId:       { type: Schema.Types.ObjectId, required: true },
  title:            { type: String },
  banner:           { type: String },
  content:          { type: String }, // Here is html
  reviews:          CommonSchemas.reviews,

  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const designsModel = mongoose.model('designs', designsSchema);

module.exports = designsModel;
