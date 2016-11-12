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
  avatar:     { type: String },
  name:       { type: String },
  likesCount: { type: Number },
  likedBy:    { type: [ Schema.Types.ObjectId ] },
  text:       { type: String }
}
const reviews = {
  totalStars:       { type: Number },
  starGiversCount:  { type: Number },
  commentsCount:    { type: Number },
  comments:         { type: [ comment ] }
}
const userSnapshot = {
  userId: { type: String },
  name:   { type: String },
  avatar: { type: String },
  banner: { type: String }
}
const homeSnapshot = {
  homeId:       { type: String },
  name:         { type: String },
  reviews:      reviews,
  geolocation:  geolocation,
  price:        QU
}
const designSnapshot = {
  designId: { type: String },
  title:    { type: String },
  reviews:  reviews
}

export {
  QU,
  geolocation,
  comment,
  userSnapshot,
  homeSnapshot,
  designSnapshot,
  reviews
}

