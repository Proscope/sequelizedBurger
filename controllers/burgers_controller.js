
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// index page
router.get('/', function (req, res) {
  db.burger.selectAll(function(data) {
    var cheeseBurgers = { burgers: data };
    res.render('index', cheeseBurgers);
  });
});
// create a new burger
router.post('/burger/create', function (req, res) {
  db.burger.insertOne(req.body.burger_name, function() {
    res.redirect('/');
  });
});
// devour a burger
router.post('/burger/eat/:id', function (req, res) {
  db.burger.updateOne(req.params.id, function() {
    res.redirect('/');
  });
});
module.exports = router;