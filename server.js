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
	obj.hpImg = [];
	obj.hpPos = [];
	obj.hpRot = [];

	var mysql = require('mysql');

	var con = mysql.createConnection({
		host: "comp-server.uhi.ac.uk",
		user: "SH20002219",
		password: "20002219",
		database: "SH20002219"
	});

	con.connect(function(error) {
		if (error) throw error;

		var select = "SELECT * FROM hotpoints WHERE photo = ?";
		con.query(select, [request.query.loc], function(error, result) {
			if (error) throw error;
			for (var i = 0; i < result.length; i++) {
				obj.hpImg.push(result[i].destination);
				obj.hpPos.push(result[i].position);
				obj.hpRot.push(result[i].rotation);
			}

			var json = JSON.stringify(obj);

			response.send(json);
		})
	});
})

app.listen(port, host);