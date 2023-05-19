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
	var del = "DELETE FROM infopoints";
	con.query(del, function(error, result) {
		if (error) throw error;
		console.log("Deleted all records!");
	})

	let data = JSON.parse(fs.readFileSync('./info.json'));

	for (var i = 0; i < data.info.length; i++) {
		var insert = "INSERT INTO infopoints (photo, title, description, position) VALUES ('" + data.info[i].photo + "', '" + data.info[i].title + "', '" + data.info[i].description + "', '" + data.info[i].position + "')";
		con.query(insert, function(error, result) {
			if (error) throw error;
		})

		if (i == (data.info.length - 1)) {
			console.log("All records inserted successfully");
		}
	}

	con.end();
});