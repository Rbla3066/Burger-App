var con = require("./connection.js");
var moment = require("moment")
module.exports = {
	getBurgers: function(callback){
		con.query("SELECT * FROM burgers", function(err, res){
			if(err){
				callback(err)
			} else {
				callback(null, res);
			}
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
			if(err){
				callback(err)
			} else {
				callback(null, res);
			}
		});
	},
	devourBurger: function(id, callback){
		con.query("UPDATE burgers SET devoured=1 WHERE id="+id, function(err, res){
			if(err){
				callback(err);
			} else {
				callback(null, res);
			};
		});
	}
}