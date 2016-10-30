var express = require("express")
var multer  = require('multer')
var upload = multer({ dest: './uploads/' }) 
var app = express();
// var mongo = require("mongodb").MongoClient
// var link = process.env.MONGOLAB_URI // if its local c9 'mongodb://localhost:27017/microservice'  && 
var port = process.env.PORT || 8080;
// Handling Home url
app.use(express.static(__dirname + '/public'))

// Handling File Submit
app.post('/get-file-data', upload.single('fileupload'), function(req,res){
  
  res.end(JSON.stringify({"File Size": req.file.size + ' bytes'}))
    
})




app.listen(port, function () {
  console.log('The app listening on port ' + port +  '!');
});