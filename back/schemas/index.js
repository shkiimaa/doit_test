const mongoose = require('mongoose');

const connect = (URL) => {
  mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'test',
    })
    .catch((err) => console.log(err));
};

mongoose.connection.on('disconnected', (err) => {
  console.error('mongoDB Connect Erorr: ', err);
});

module.exports = connect;
