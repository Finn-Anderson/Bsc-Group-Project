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
	var del = "DELETE FROM photographs";
	con.query(del, function(error, result) {
		if (error) throw error;
		console.log("Deleted all records!");
	})

	let data = JSON.parse(fs.readFileSync('./photos.json'));

	for (var i = 0; i < data.photos.length; i++) {
		var insert = "INSERT INTO photographs (photo) VALUES ('" + data.photos[i].img + "')";
		con.query(insert, function(error, result) {
			if (error) throw error;
		})

		if (i == (data.photos.length - 1)) {
			console.log("All records inserted successfully");
		}
	}

	con.end();
});