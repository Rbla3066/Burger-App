var path = require("path");

module.exports = function(app){
	app.get("/home", function(req, res){
		res.sendFile(path.join(__dirname + "/../views/home.html"));
	});
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname + "/../views/home.html"));
	});
};