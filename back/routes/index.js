const express = require('express');
const router = express.Router();

const maria = require('../database/connect/maria');

maria.connect();

router.get('/get', function (req, res) {
  console.log(req.body);
});
