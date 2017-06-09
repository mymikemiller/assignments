var express = require("express");
var userRoutes = express.Router();
var User = require("../models/user");

userRoutes.route("/")
    .get(function (req, res) {
        User.find(function (err, users) {
            if (err) return res.status(500).send(err);
            return res.send(users);
        });
    })
    .post(function (req, res) {
        var user = new User(req.body);
        user.save(function (err, newUser) {
            if (err) return res.status(500).send(err);
            return res.status(201).send(newUser); // 201 means "created"
        });
    });

userRoutes.route("/:id")
    .get(function (req, res) {
        //user.findOne({_id: req.param.id, function(err, user)...}); // this works too
        User.findById(req.params.id, function (err, user) {
            if (err) return res.status(500).send(err);
            return res.send(user);
        });
    })
    .put(function (req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedUser) { // the new: true makes it return the udpated object instead of the old one
            if (err) return res.status(500).send(err);
            return res.send(updatedUser);
        });
    })
    .delete(function (req, res) {
        User.findByIdAndRemove(req.params.id, function (err, user) {
            if (err) return res.status(500).send(err);
            return res.send(user);
        });
    });

module.exports = userRoutes;