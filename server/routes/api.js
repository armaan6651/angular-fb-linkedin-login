const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/mean', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;

var app=express();
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