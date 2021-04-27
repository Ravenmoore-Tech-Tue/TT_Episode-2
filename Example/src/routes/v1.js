'use strict';

//third party dependencies

const express = require('express');
const feather = require('../models/collection')

//server constants

const router = express.Router();

router.get('/feather', handleGetAll);
router.get('/feather/:id', handleGetOne);
router.post('/feather', handleCreate);
router.put('/feather/:id', handleUpdate);
router.delete('/feather/:id', handleDelete);

async function handleGetAll(req, res) {
  let allRecords = await feather.get();
  res.status(200).json(allRecords);
}
async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await feather.get(id);
  res.status(200).json(theRecord);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await feather.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await feather.update(id, obj);
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await feather.delete(id);
  res.status(200).json(deletedRecord);
}

module.exports = router;
