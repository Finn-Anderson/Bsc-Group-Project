var mysql = require('mysql');
var fs = require("fs");

var con = mysql.createConnection({
	host: "comp-server.uhi.ac.uk",
	user: "SH20002219",
	password: "20002219",
	database: "SH20002219"
});

con.connect(function(error) {
	if (error) throw error;

	// Clear any records
	var del = "DELETE FROM hotpoints";
	con.query(del, function(error, result) {
		if (error) throw error;
		console.log("Deleted all records!");
	})

	let data = JSON.parse(fs.readFileSync('./hotpoints.json'));

	for (var i = 0; i < data.hotpoints.length; i++) {
		var insert = "INSERT INTO hotpoints (photo, destination, position, rotation) VALUES ('" + data.hotpoints[i].photo + "', '" + data.hotpoints[i].destination + "', '" + data.hotpoints[i].position + "', '" + data.hotpoints[i].rotation + "')";
		con.query(insert, function(error, result) {
			if (error) throw error;
		})

		if (i == (data.hotpoints.length - 1)) {
			console.log("All records inserted successfully");
		}
	}
});