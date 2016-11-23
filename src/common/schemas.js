'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QU = {
  quantity: { type: Number },
  unit:     { type: String }
}
const geolocation = {
  latlng:   {
    latitude:   { type: Number },
    longitude:  { type: Number }
  },
  location: {
    country: { type: String },
    city:    { type: String },
    address: { type: String }
  }
}
const comment = {
  userId:     { type: Schema.Types.ObjectId },
  text:       { type: String },
  likesCount: { type: Number },
  likedBy:    { type: [ Schema.Types.ObjectId ] }
}
const reviews = {
  totalStars:       { type: Number },
  starGiversCount:  { type: Number },
  commentsCount:    { type: Number },
  comments:         { type: [ comment ] }
}

export {
  QU,
  geolocation,
  comment,
  reviews
}

