var express = require("express");

var spotRoutes = express.Router();
var Spot = require("../models/spot");

spotRoutes.route("/")
    .get(function (req, res) {
        console.log("get Spot");
        Spot.find(function (err, spots) {
            if (err) return res.status(500).send(err);
            return res.send(spots);
        });
    })
    .post(function (req, res) {
        console.log("put Spots");
        console.log(req.body);
        var spot = new Spot(req.body);
        spot.save(function (err, newSpot) {
            if (err) return res.status(500).send(err);
            return res.status(201).send(newSpot);
        });
    });

spotRoutes.route("/:id")
    .get(function (req, res) {
        Spot.findById(req.params.id, function (err, spot) {
            if (err) return res.status(500).send(err);
            return res.send(spot);
        });
    })
    .put(function (req, res) {
        Spot.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedSpot) {
            if (err) return res.status(500).send(err);
            console.log("sending after update " + JSON.stringify(updatedSpot));
            return res.send(updatedSpots);
        })
    })
    .delete(function (req, res) {
        Spot.findByIdAndRemove(req.params.id, function (err, removedSpot) {
            if (err) return res.status(500).send(err);
            return res.send(removedSpot);
        })
    });

module.exports = spotRoutes;