var express = require("express");
var postRoutes = express.Router();
var Post = require("../models/post");

postRoutes.route("/")
    .get(function (req, res) {
        var ret = "get all posts";
        console.log(ret);
        Post.find(function (err, posts) {
            if (err) return res.status(500).send(err);
            return res.send(posts);
        });
        return res.send(ret);
    })
    .post(function (req, res) {

    });

postRoutes.route("/:id")
    .get(function (req, res) {

    })
    .put(function (req, res) {

    })
    .delete(function (req, res) {

    });

module.exports = postRoutes;