var express = require("express");
var userRoutes = express.Router();
var User = require("../models/user");

userRoutes.route("/")
    .get(function (req, res) {
        var ret = "get all users";
        console.log(ret);
        User.find(function (err, users) {
            if (err) return res.status(500).send(err);
            return res.send(users);
        });
        return res.send(ret);
    })
    .post(function (req, res) {
        var user = new User(req.body);
        user.save(function (err, newUser) {
            if (err) return res.status(500).send(err);
            return res.send(newUser);
        });
    });

userRoutes.route("/:id")
    .get(function (req, res) {

    })
    .put(function (req, res) {

    })
    .delete(function (req, res) {

    });

module.exports = userRoutes;