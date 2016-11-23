'use strict';

// user-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const CommonSchemas = require('../../common/schemas')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  phone:            { type: String, required: true, unique: true },
  password:         { type: String, required: true },

  name:             { type: String },
  email:            { type: String, unique: true },
  avatar:           { type: String },
  banner:           { type: String },
  geolocation:      CommonSchemas.geolocation,
  profession:       { type: String },

  followers:        { type: [ Schema.Types.ObjectId ] },
  followings:       { type: [ Schema.Types.ObjectId ] },
  favoriteHomes:    { type: [ Schema.Types.ObjectId ] },
  favoriteDesigns:  { type: [ Schema.Types.ObjectId ] },
  preferences:      { type: Schema.Types.Mixed },

  hostId:           { type: Schema.Types.ObjectId },
  designerId:       { type: Schema.Types.ObjectId },

  facebookId:       { type: String },
  facebook:         { type: Schema.Types.Mixed },
  googleId:         { type: String },
  google:           { type: Schema.Types.Mixed },

  createdAt:        { type: Date, 'default': Date.now },
  updatedAt:        { type: Date, 'default': Date.now }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;

