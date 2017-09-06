// Begin White Belt Coding Ninja ORM

// Connection variable
var connection = require("./connection.js");

// Object Relational Mapper (ORM)
var orm = {

    selectAll: function(req, res) {
        connection.query('SELECT * FROM burgers WHERE devoured = 0', function(err, data) {
            if (err) {
                throw err;
            }
            // Render page to HTML
            res.render('index', { burger: data });
        });
    },

    insertOne: function(req, res) {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, false)", [req.body.burgerName]);
        res.redirect("/");
    },

    updateOne: function() {

        console.log("Ran dbEdit.updateOne()");

    }
};

// Exports
module.exports = orm;