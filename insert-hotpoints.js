var mysql = require('mysql');

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

	insertList = [["img/Front-Entrance/GS__0107.JPG", "img/Front-Entrance/GS__0106.JPG", "12 0 -10", "0 -45 0"], ["img/Front-Entrance/GS__0106.JPG", "img/Front-Entrance/GS__0107.JPG", "-12 0 0", "0 90 0"], ["img/Front-Entrance/GS__0106.JPG", "img/Front-Entrance/GS__0105.JPG", "15 0 3", "0 -90 0"], ["img/Front-Entrance/GS__0105.JPG", "img/Front-Entrance/GS__0106.JPG", "-15 0 2", "0 90 0"]];
	for (var i = 0; i < insertList.length; i++) {
		var insert = "INSERT INTO hotpoints (photo, destination, position, rotation) VALUES ('" + insertList[i][0] + "', '" + insertList[i][1] + "', '" + insertList[i][2] + "', '" + insertList[i][3] + "')";
		con.query(insert, function(error, result) {
			if (error) throw error;
		})

		if (i == (insertList.length - 1)) {
			console.log("All records inserted successfully");
		}
	}
});