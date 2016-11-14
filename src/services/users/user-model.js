'use strict';

// user-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const CommonSchemas = require('../../common/schemas')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name:             { type: String, required: true },
  email:            { type: String, required: false, unique: true },
  phone:            { type: String, required: false, unique: true },
  password:         { type: String, required: true },
  avatar:           { type: String, required: false },
  banner:           { type: String, required: false },
  geolocation:      CommonSchemas.geolocation,
  profession:       { type: String, required: false },

  followers:        { type: [ Schema.Types.ObjectId ] },
  followings:       { type: [ Schema.Types.ObjectId ] },
  favoriteHomes:    { type: [ Schema.Types.ObjectId ] },
  favoriteDesigns:  { type: [ Schema.Types.ObjectId ] },
  preferences:      { type: Schema.Types.Mixed },

  rules:            { type: [ String ] }, // of 'default', 'host', 'designer'
  hostId:           { type: Schema.Types.ObjectId , required: false },
  designerId:       { type: Schema.Types.ObjectId , required: false },

  facebookId:       { type: String },
  facebook:         { type: Schema.Types.Mixed },
  googleId:         { type: String },
  google:           { type: Schema.Types.Mixed },

  createdAt:        { type: Date, 'default': Date.now },
  updatedAt:        { type: Date, 'default': Date.now }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;

