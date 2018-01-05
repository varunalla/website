var express = require('express');
var path = require('path');
var app = express();
var port=process.env.PORT || 3000;
app.use(express.static('public'));
app.get('/', function (req, res) {  return res.sendFile(path.join(__dirname + '/public/html/index.html')); });
app.listen(port, function () { 
    console.log('Website Started on port',port); 
});