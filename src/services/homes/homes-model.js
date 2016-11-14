'use strict';

// homes-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const CommonSchemas = require('../../common/schemas')
const Schema = mongoose.Schema;

const homesSchema = new Schema({
  host:         CommonSchemas.userSnapshot,

  name:         { type: String },
  banner:       { type: String },
  geolocation:  CommonSchemas.geolocation,
  price:        CommonSchemas.QU,
  status:       { type: String }, // one of 'available', 'rented'
  wifi:         { band: CommonSchemas.QU, price: CommonSchemas.QU },
  electricity:  { price: CommonSchemas.QU },
  water:        { price: CommonSchemas.QU },
  withTv:       { type: Boolean },
  descriptions: { type: String },
  rooms:        { type: Number },
  pictures:     { type: [ String ] },

  reviews:      CommonSchemas.reviews,

  createdAt:  { type: Date, 'default': Date.now },
  updatedAt:  { type: Date, 'default': Date.now }
});

const homesModel = mongoose.model('homes', homesSchema);

module.exports = homesModel;

