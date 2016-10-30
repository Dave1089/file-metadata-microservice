var express = require("express")
var multer  = require('multer')
var upload = multer()// multer({ dest: 'uploads/' })
var app = express();
// var mongo = require("mongodb").MongoClient
// var link = process.env.MONGOLAB_URI // if its local c9 'mongodb://localhost:27017/microservice'  && 
var port = process.env.PORT || 8080;
// Handling Home url
app.use(express.static(__dirname + '/public'))





app.listen(port, function () {
  console.log('The app listening on port ' + port +  '!');
});