const express = require('express');
const app = express();
const port = 8800;
const cors = require('cors');
const boradRouter = require('./routes/index');

const maria = require('./database/connect/maria');

maria.connect();

let corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use('/', boradRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
