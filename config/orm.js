var con = require("./connection.js");
var moment = require("moment")
module.exports = {
	getBurgers: function(callback){
		con.query("SELECT * FROM burgers", function(err, res){
			callback(err, res)
		});
	},
	addBurger: function(burger, callback){
		var newBurger = {
			id: 0,
			name: burger.name,
			devoured: 0,
			date: moment().format('MMMM Do YYYY, h:mm:ss a')
		}
		con.query("INSERT INTO burgers SET ?", newBurger, function(err, res){
			callback(err, res)
		});
	},
	devourBurger: function(id, callback){
		con.query("UPDATE burgers SET devoured=1 WHERE id="+id, function(err, res){
			callback(err, res)
		});
	},
	deleteBurger: function(id, callback){
		con.query("DELETE FROM burgers WHERE id="+id, function(err, res){
			callback(err, res);
		});
	}
};