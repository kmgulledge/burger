// Begin White Belt Coding Ninja for Connections

// Node Dependency
var mysql = require("mysql");

/*
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});
*/


var connection = mysql.createConnection({
    host: "ffn96u87j5ogvehy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "fbsyq1ongmea1pcl",
    password: "oryv4x6nqcdgelyh",
    database: "fk8cj4s3vh6gau53"
});


connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Connection Export
module.exports = connection;