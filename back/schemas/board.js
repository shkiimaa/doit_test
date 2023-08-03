const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema(
  {
    name: String,
    password: String,
    title: String,
    content: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model('Board', boardSchema);
