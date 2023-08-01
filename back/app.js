const express = require('express');
const app = express();
const port = 8800;

const maria = require('./database/connect/maria');

maria.connect();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
