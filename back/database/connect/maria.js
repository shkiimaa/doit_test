const maria = require('mysql');

const conn = maria.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1111',
  database: 'test',
});

module.exports = conn;
