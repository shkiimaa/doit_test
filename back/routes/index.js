const express = require('express');
const router = express.Router();

const maria = require('../database/connect/maria');

router.get('/list', function (req, res) {
  maria.query('SELCET * FROM ');
});

router.post('/list', function (req, res) {
  res.send('테스트');
});

router.get('/list', function (req, res) {
  maria.query('SELCET * FROM ');
});

module.exports = router;
