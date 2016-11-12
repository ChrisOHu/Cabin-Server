'use strict';

// homes-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const CommonSchemas = require('../../common/schemas')
const Schema = mongoose.Schema;

const homesSchema = new Schema({
  host:         { type: CommonSchemas.userSnapshot },

  name:         { type: String, required: true },
  banner:       { type: String, require: true },
  geolocation:  { type: CommonSchemas.geolocation },
  price:        { type: CommonSchemas.QU },
  status:       { type: String }, // one of 'available', 'rented'
  wifi:         { band: CommonSchemas.QU, price: CommonSchemas.QU },
  electricity:  { price: CommonSchemas.QU },
  water:        { price: CommonSchemas.QU },
  withTv:       { type: Boolean },
  descriptions: { type: String },
  rooms:        { type: Number },
  pictures:     [ String ],

  reviews:      { type: CommonSchemas.reviews },

  createdAt:  { type: Date, 'default': Date.now },
  updatedAt:  { type: Date, 'default': Date.now }
});

const homesModel = mongoose.model('homes', homesSchema);

module.exports = homesModel;
