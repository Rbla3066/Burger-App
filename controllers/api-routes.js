var orm = require("../config/orm.js");
module.exports = function(app){
	app.get('/api/burger', function(req, res){
		orm.getBurgers(function(err, burgers){
			if(err) console.log(err)
			res.json(burgers)
		});
	});
	app.post('/api/burger', function(req, res){
		orm.addBurger(req.body, function(err, result){
			if(err) console.log(err)
			console.log("sent!");
			res.end();
		});
	});
	app.post('/api/devour', function(req, res){
		orm.devourBurger(req.body.id, function(err, result){
			if(err) console.log(err)
			console.log("devoured!");
			res.end();
		})
	});
	app.post('/api/delete', function(req, res){
		orm.deleteBurger(req.body.id, function(err, result){
			if(err) console.log(err)
			console.log("deleted!");
			res.end();
		})
	})
};