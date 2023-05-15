var mysql = require('mysql');

var con = mysql.createConnection({
	host: "comp-server.uhi.ac.uk",
	user: "SH20002219",
	password: "20002219",
	database: "SH20002219"
});

// Create tables for database
con.connect(function(error) {
	if (error) throw error;

	var photos = "CREATE TABLE IF NOT EXISTS photographs (photo VARCHAR(255) PRIMARY KEY)";
	con.query(photos, function(error, result) {
		if (error) throw error;
		console.log("Photo table created!");
	})

	var hotpoints = "CREATE TABLE IF NOT EXISTS hotpoints (photo VARCHAR(255), destination VARCHAR(255), position VARCHAR(15), rotation VARCHAR(15), FOREIGN KEY (photo) REFERENCES photographs (photo) ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY (photo, destination))";
	con.query(hotpoints, function(error, result) {
		if (error) throw error;
		console.log("Hotpoint table created!");
	})

	var infopoints = "CREATE TABLE IF NOT EXISTS infopoints (photo VARCHAR(255), title VARCHAR(25), description VARCHAR(255), position VARCHAR(15), FOREIGN KEY (photo) REFERENCES photographs (photo) ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY (photo, title))";
	con.query(infopoints, function(error, result) {
		if (error) throw error;
		console.log("Info table created!");
	})
});