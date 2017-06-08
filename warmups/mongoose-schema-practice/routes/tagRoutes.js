var express = require("express");
var tagRoutes = express.Router();
var Tag = require("../models/tag");

tagRoutes.route("/")
    .get(function (req, res) {
        var ret = "get all tags";
        console.log(ret);
        Tag.find(function (err, tags) {
            if (err) return res.status(500).send(err);
            return res.send(tags);
        });
        return res.send(ret);
    })
    .post(function (req, res) {

    });

tagRoutes.route("/:id")
    .get(function (req, res) {

    })
    .put(function (req, res) {

    })
    .delete(function (req, res) {

    });

module.exports = tagRoutes;