var express = require("express");

var locationRoutes = express.Router();
var Location = require("../models/location");

locationRoutes.route("/")
    .get(function (req, res) {
        console.log("get locations");
        Location.find(function (err, locations) {
            if (err) return res.status(500).send(err);
            return res.send(locations);
        });
    })
    .post(function (req, res) {
        console.log("put locations");
        console.log(req.body);
        var location = new Location(req.body);
        location.save(function (err, newLocation) {
            if (err) return res.status(500).send(err);
            return res.status(201).send(newLocation);
        });
    });

locationRoutes.route("/:id")
    .get(function (req, res) {
        Location.findById(req.params.id, function (err, location) {
            if (err) return res.status(500).send(err);
            return res.send(location);
        });
    })
    .put(function (req, res) {
        Location.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedLocation) {
            if (err) return res.status(500).send(err);
            console.log("sending after update " + JSON.stringify(updatedLocation));
            return res.send(updatedLocations);
        })
    })
    .delete(function (req, res) {
        Location.findByIdAndRemove(req.params.id, function (err, removedLocation) {
            if (err) return res.status(500).send(err);
            return res.send(removedLocation);
        })
    });

module.exports = locationRoutes;