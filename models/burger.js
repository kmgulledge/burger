// Begin White Belt Coding Ninja for the burgers

var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.all('burger', function(res) {
            cb(res);
        });
    },
    create: function(col, vals, cb) {
        orm.create('burger', col, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update('burger', objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;