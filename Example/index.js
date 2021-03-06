'use strict';

require('dotenv').config();

//start up the DB
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGODB_URI, options);

require('./src/server').start(process.env.PORT);