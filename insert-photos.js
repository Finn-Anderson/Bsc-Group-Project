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
	var del = "DELETE FROM photographs";
	con.query(del, function(error, result) {
		if (error) throw error;
		console.log("Deleted all records!");
	})

	insertList = ["img/Front-Entrance/GS__0107.JPG", "img/Front-Entrance/GS__0106.JPG", "img/Front-Entrance/GS__0105.JPG"];
	for (var i = 0; i < insertList.length; i++) {
		var insert = "INSERT INTO photographs (photo) VALUES ('" + insertList[i] + "')";
		con.query(insert, function(error, result) {
			if (error) throw error;
		})

		if (i == (insertList.length - 1)) {
			console.log("All records inserted successfully");
		}
	}
});