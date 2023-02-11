const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Post must have a title'],
    //unique: true,
    trim: true,
    maxlength: [40, 'A title name must have less or equal than 40 characters'],
    minlength: [5, 'A title name must have more or equal than 5 characters'],
  },

  text: {
    type: String,
    required: [true, 'Post must have a text'],
    trim: true,
    minlength: [5, 'A text name must have more or equal than 5 characters'],
  },
  category: {
    type: String,
    required: [true, 'A posst must have a category'],
    enum: {
      values: ['news', 'world', 'economy', 'sport', 'culture', 'technology'],
      message: 'Category: news, world, economy, sport, culture, technology',
    },
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
