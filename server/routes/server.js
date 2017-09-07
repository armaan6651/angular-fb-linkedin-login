var express=require('express');
var app=express();
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/armaan";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database connected!");

});
function getdata(){

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("user").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.location);
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  //Find all documents in the customers collection:
  db.collection("user").find({}).toArray(function(err, result) {
    if (err) throw err;
    for(var i=0;i<result.length;i++){
    console.log(result[i].location);
}
    db.close();
  });
});



}

getdata();
app.listen(3000,function(){
	console.log("server is running");
});