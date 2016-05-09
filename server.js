var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var method = require('method-override');
var app = express();
var PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


require('./controllers/html-routes.js')(app); 
require('./controllers/api-routes.js')(app); 


app.listen(PORT, function() {
	console.log("Server listening on PORT: " + PORT);
});