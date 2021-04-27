'use strict';


const  mongoose = require('mongoose');

const schema = mongoose.Schema({
  
  name: { type: String, required: true },authors: { type: Array, required: true },
  description: { type: String, required: true },
  image: { type: Array, required: true }
})

const Model = mongoose.model('schema', schema);

module.exports = Model;

