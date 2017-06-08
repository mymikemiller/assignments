var express = require("express");
var commentRoutes = express.Router();
var Comment = require("../models/comment");

commentRoutes.route("/")
    .get(function (req, res) {
        var ret = "get all comments";
        console.log(ret);
        Comment.find(function (err, comments) {
            if (err) return res.status(500).send(err);
            return res.send(comments);
        });
        return res.send(ret);
    })
    .post(function (req, res) {

    });

commentRoutes.route("/:id")
    .get(function (req, res) {

    })
    .put(function (req, res) {

    })
    .delete(function (req, res) {

    });

module.exports = commentRoutes;