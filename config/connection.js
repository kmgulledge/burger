// Begin White Belt Coding Ninja for Connections

// Node Dependency
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});
/*
// if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL)({
    // } else {
    connection = mysql.createConnection({
        host: "ffn96u87j5ogvehy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "fbsyq1ongmea1pcl",
        password: "oryv4x6nqcdgelyh",
        database: "todoagain_db"
    })
}); */

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Connection Export
module.exports = connection;