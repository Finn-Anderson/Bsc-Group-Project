var fs = require("fs");
var host = "127.0.0.1";
var port = 8000;
var express = require("express");

var app = express();
app.use(express.static(__dirname + "/src")); //use static files in ROOT/src folder

app.get("/", function(request, response){ //root dir
	response.sendFile(__dirname + "/src/index.html");
})

app.get("/requestdata", function(request, response){ //root dir
	response.send("data");
})

app.listen(port, host);