const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const bcrypt = require('bcryptjs');

// Create Schema
const FavSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  userImage: {
    type: String,
    required: true
  },
  coverImage: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true
  },
  tags: {
    type: String,
    required: true
  },
  comments: {
    type: String,
    required: true
  },
});




module.exports = Fav = mongoose.model('favourite', FavSchema);