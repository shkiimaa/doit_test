require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const boradRouter = require('./routes/index');

const connectDB = require('./schemas');
const port = 8800;

let corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/', [boradRouter]);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connectDB(process.env.MONGO_DB_URL);
});
