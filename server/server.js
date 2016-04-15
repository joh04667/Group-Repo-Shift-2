var express=require('express');
var mongoose=require('mongoose');
var index=require('./routes/index')
// var getUsers=require('./routes/getUsers');
var app=express();
var bodyParser = require("body-parser");

app.use(express.static('server/public'));

app.use(bodyParser.json());
app.use('/', index);
// app.use('/getUsers', getUsers);

      //[[[[[[[[[[[[[[[Put database name after localhost:27017/]]]]]]]]]]]]]]]
var mongoURI = 'mongodb://localhost/yellowTeam/';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('mongodb connection error', err);
});

MongoDB.once('open', function(){
  console.log('mongodb connection open!');
});

var server=app.listen(3000, function(){
  var port=server.address().port;
  console.log('listening on port', port);
});
