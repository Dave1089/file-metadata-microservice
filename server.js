var express = require("express")
var app = express();
var mongo = require("mongodb").MongoClient
var link = process.env.MONGOLAB_URI // if its local c9 'mongodb://localhost:27017/microservice'  && 
var port = process.env.PORT || 8080;






app.listen(port, function () {
  console.log('The app listening on port ' + port +  '!');
});