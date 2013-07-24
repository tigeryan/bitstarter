var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/img", express.static(__dirname + '/img'));

app.get('/', function(request, response) {
	
	var text = fs.readFileSync('index.html','utf8');
	response.send(text);
});

app.get('/about.html',function(request, response) {
	var text = fs.readFileSync('about.html','utf8');
	response.send(text);
});

app.get('/contact.html',function(request,response) {
	var text = fs.readFileSync('contact.html','utf8');
	response.send(text);
});

app.post('/save_contact', function(request,response){
	var text = fs.readFileSync('contact_save.html','utf8');
	response.send(text);
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
