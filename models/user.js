'use strict';

const BookSchema = require('./books');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/books', { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
  email: String,
  books: [BookSchema]
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
