'use strict';
const express = require('express');
/*const mongoose=require('mongoose');

var db = mongoose.connect('mongodb://admin:QX7gojEdiPfx1nvm@cluster0-shard-00-00-xznx1.mongodb.net:27017,cluster0-shard-00-01-xznx1.mongodb.net:27017,cluster0-shard-00-02-xznx1.mongodb.net:27017/MathAPI?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://admin:QX7gojEdiPfx1nvm@cluster0-shard-00-00-xznx1.mongodb.net:27017,cluster0-shard-00-01-xznx1.mongodb.net:27017,cluster0-shard-00-02-xznx1.mongodb.net:27017/MathAPI?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
MongoClient.connect(uri, function(err, db) {
  db.close();
});
*/
const app=express();
const port=process.env.PORT||3000;
var mathRouter= express.Router();
app.use('/api',mathRouter);

mathRouter.route('/add')
	.get(function(req,res){
		var sum = Number(req.query.A) + Number(req.query.B);
		res.send("The Value is :" +sum);
	})

mathRouter.route('/substract')
	.get(function(req,res){
		var sum = Number(req.query.A) - Number(req.query.B);
		res.send("The Value is :" +sum);
	})

mathRouter.route('/multiply')
	.get(function(req,res){
		var sum = Number(req.query.A) * Number(req.query.B);
		res.send("The Value is :" +sum);
	})

mathRouter.route('/divide')
	.get(function(req,res){
		var sum = Number(req.query.A)/ Number(req.query.B);
		res.send("The Value is :" +sum);
	})

app.get('/', function(req,res){
	res.send("Welcome to Math API");
});

app.listen(port,function(){

	console.log("Listening on port " + port);
});

/*app.get('/add', function(req,res){


	res.send("Welcome to Math API Add function");
});
*/