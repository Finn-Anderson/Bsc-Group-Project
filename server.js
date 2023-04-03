var fs = require("fs");
var host = "127.0.0.1";
var port = 8000;
var express = require("express");

var app = express();
app.use(express.static(__dirname + "/src")); //use static files in ROOT/src folder

app.get("/", function(request, response) { //root dir
	response.sendFile(__dirname + "/src/index.html");
})

app.get("/requestdata", function(request, response) {
	var obj = new Object();
	obj.img = request.query.loc;

	if (request.query.loc == "img/Front-Entrance/GS__0107.JPG") {
		obj.hpImg = ["img/Front-Entrance/GS__0106.JPG"];
		obj.hpPos = ["12 0 -10"];
		obj.hpRot = ["0 -45 0"];
	} else if (request.query.loc == "img/Front-Entrance/GS__0106.JPG") {
		obj.hpImg = ["img/Front-Entrance/GS__0107.JPG", "img/Front-Entrance/GS__0105.JPG"];
		obj.hpPos = ["-12 0 0", "15 0 3"];
		obj.hpRot = ["0 90 0", "0 -90 0"];
	} else {
		obj.hpImg = ["img/Front-Entrance/GS__0106.JPG"];
		obj.hpPos = ["-15 0 2"];
		obj.hpRot = ["0 90 0"];
	}

	var json = JSON.stringify(obj);

	response.send(json);
})

app.listen(port, host);