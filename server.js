'use strict';

const cors = require('cors');
const express = require('express');
require('dotenv').config();
const UserModel = require('./models/user');


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/books', { useNewUrlParser: true, useUnifiedTopology: true });


const app = express();
const port = process.env.PORT || 3001;
app.use(cors());


app.get('/', function (req, res) {
  res.send('Abdallah Abu Khurma');
});

app.get('/books', getBooksByUser);


// seedUserCollection();

function seedUserCollection() {

  const mariam = new UserModel({
    email: 'mariamodat0@gmail.com',
    books: [
      {
        name: 'Think Grow Rich',
        description: 'Think and Grow Rich was written by Napoleon Hill in 1937 and promoted as a personal development and self-improvement book. He claimed to be inspired by a suggestion from business magnate and later-philanthropist Andrew Carnegie.',
        status: 'Read'
      },
      {
        name: 'The Power Of Positive Thinking',
        description: 'The Power of Positive Thinking: A Practical Guide to Mastering the Problems of Everyday Living is a 1952 self-help book by Norman Vincent Peale',
        status: 'Still reading'
      },
      {
        name: 'failing ForWard',
        description: 'Americas most trusted leadership expert will transform your attitude and belief about failure and empower you to make positive changes in your life to achieve your full potential.',
        status: 'Read'
      }
    ]
  });

  const abdallah = new UserModel({
    email: 'abdallahabukhurma@gmail.com',
    books: [
      {
        name: 'Think Grow Rich',
        description: 'Think and Grow Rich was written by Napoleon Hill in 1937 and promoted as a personal development and self-improvement book. He claimed to be inspired by a suggestion from business magnate and later-philanthropist Andrew Carnegie.',
        status: 'Read'
      },
      {
        name: 'The Power Of Positive Thinking',
        description: 'The Power of Positive Thinking: A Practical Guide to Mastering the Problems of Everyday Living is a 1952 self-help book by Norman Vincent Peale',
        status: 'Still reading'
      },
      {
        name: 'failing ForWard',
        description: 'Americas most trusted leadership expert will transform your attitude and belief about failure and empower you to make positive changes in your life to achieve your full potential.',
        status: 'Read'
      }
    ]
  });
  abdallah.save();
  mariam.save();
}



function getBooksByUser(req, res) {
  const { email } = req.query;
  UserModel.find({ email: email }, function (err, userData) {
    if (err) res.send('There is an error, If this massege appears I will get creazy');
    res.send(userData);
  });
}

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
