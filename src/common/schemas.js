'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommonSchemas = {
  userSnapshot: {
    userId: String,
    name: String,
    avatar: String,
    banner: String
  },
  homeSnapshot: {
    homeId: String,
    name: String,
    reviews: CommonSchemas.reviews,
    geolocation: CommonSchemas.geolocation,
    price: CommonSchemas.QU
  },
  designSnapshot: {
    designId: String,
    title: String,
    reviews: CommonSchemas.reviews
  },
  geolocation: {
    latlng:   { latitude: Number, longitude: Number },
    location: { country: String, city: String, address: String }
  },
  reviews: {
    totalStars: Number,
    starGiversCount: Number,
    commentsCount: Number,
    comments: [ CommonSchemas.comment ]
  },
  comment: {
    avatar: String,
    name: String,
    likesCount: Number,
    likedBy: [ Schema.Types.ObjectId ],
    text: String
  },
  QU: {
    quantity: Number,
    unit: String
  }
}

export default CommonSchemas

