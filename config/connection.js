var mysql = require("mysql");
var con = mysql.createConnection({
   host: 'localhost',
   user: 'public',
   password: 'Coolbeans777',
   database: 'burger_db'
});
module.exports = con;