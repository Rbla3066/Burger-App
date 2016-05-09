var mysql = require("mysql");
var jaws = mysql.createConnection({
	host: "l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "myuw4w0u61srtwks",
	password: "ghenzo0wriau3tzv",
	database: "t6gtu624abb8fthv"
});
module.exports = jaws;