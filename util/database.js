var mysql = require('mysql2');

var pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  database:"mydatabase",
  password: "navneet"
});

module.exports=pool.promise();