const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const FavSchema = new Schema({
  id: {
    type: Number,
    required: true
  },

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
  }
  
});

module.exports = Fav = mongoose.model('favourite', FavSchema);