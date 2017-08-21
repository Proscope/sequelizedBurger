var db = require("../models");
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Burgers.findAll( { order: ['burger_name'] }).then(function(data) { // get all records, ordered by name
            var hbsObject = {
                burgers: data
            };
            res.render("index", hbsObject); // send to handlebars to render html
        });
    });

    app.post("/", function(req, res) {
        db.Burgers.create(
            { burger_name: req.body.burger_name }
        ).then(function() {
            res.redirect("/index"); // re-render html
        });
    });

    app.put("/:id", function(req, res) {
        db.Burgers.update(
            {devoured: true},
            { where: { id: req.params.id }} // update devoured to 'true' where id matches req.params.id
        ).then(function() {
            res.redirect("/index"); // re-render html
        });
    });
};