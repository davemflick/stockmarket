var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');


var dbURL = 'mongodb://localhost/stockmarket';
mongoose.connect(dbURL, {useMongoClient: true}, function(err){
	if(err){
		console.log("Error in connecting to database. Error: "+err)
	} else {
		console.log("Mongoose connected to database");
	}
});
//Solves mongoose promise error
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', function(req, res, next){
	res.render('index', {title: "Stockmarket"});
});

app.listen(process.env.PORT || 3000, function(err){
	if(err){
		console.log("error in connecting to server, error: " + err);
	} else {
		console.log("Stockmarket App connected to Server");
	}
})