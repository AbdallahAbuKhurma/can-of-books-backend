'use strict';

const cors = require('cors');
const express = require('express');
require('dotenv').config();
const UserModel = require('./user');


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/books', { useNewUrlParser: true, useUnifiedTopology: true });


const app = express();
const port = process.env.PORT || 3001;
app.use(cors());


app.get('/', function (req, res) {
  res.send('Hello world');
});

app.get('/books', getBooksByUser);

function getBooksByUser(req, res) {
  const { email } = req.query;
  UserModel.find({ email: email }, function (err, userData) {
    if (err) res.send('didnt work');
    res.send(userData);
  });
}

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
