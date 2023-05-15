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

	obj.infoTitle = [];
	obj.infoDesc = [];
	obj.infoPos = [];

	var mysql = require('mysql');

	var con = mysql.createConnection({
		host: "comp-server.uhi.ac.uk",
		user: "SH20002219",
		password: "20002219",
		database: "SH20002219"
	});

	con.connect(function(error) {
		if (error) throw error;

		var hotpointSelect = "SELECT * FROM hotpoints WHERE photo = ?";
		con.query(hotpointSelect, [request.query.loc], function(error, result) {
			if (error) throw error;
			for (var i = 0; i < result.length; i++) {
				obj.hpImg.push(result[i].destination);
				obj.hpPos.push(result[i].position);
				obj.hpRot.push(result[i].rotation);
			}

			send();
		})

		var infoSelect = "SELECT * FROM infopoints WHERE photo = ?";
		con.query(infoSelect, [request.query.loc], function(error, result) {
			if (error) throw error;
			for (var i = 0; i < result.length; i++) {
				obj.infoTitle.push(result[i].title);
				obj.infoDesc.push(result[i].description);
				obj.infoPos.push(result[i].position);
			}

			send();
		})

		var count = 0;
		function send() {
			count += 1;
			if (count > 1) {
				var json = JSON.stringify(obj);

				response.send(json);

				con.end();
			}
		}
	});
})

app.listen(port, host);