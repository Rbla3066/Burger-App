var orm = require("../config/orm.js");
module.exports = function(app){
	app.get('/api/burger', function(req, res){
		orm.getBurgers(function(err, burgers){
			res.json(burgers)
		});
	});
	app.post('/api/burger', function(req, res){
		orm.addBurger(req.body, function(err, result){
			console.log("sent!");
			res.end();
		});
	});
	app.post('/api/devour', function(req, res){
		orm.devourBurger(req.body.id, function(err, result){
			console.log("devoured!");
			res.end();
		})
	})
};