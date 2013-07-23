var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	
	var text = fs.readFileSync('index.html','utf8');
	response.send(text);
});
app.get('/about.html',function(request, response) {
	var text = fs.readFileSync('about.html','utf8');
	response.send(text);
});
app.get('/contact.html',function(request,response) {
	var text = fs.readFileSync('contact.html','utf8);
	reponse.send(text);
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
