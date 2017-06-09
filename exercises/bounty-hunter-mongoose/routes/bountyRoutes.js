var express = require("express");

var bountyRoutes = express.Router();
var Bounty = require("../models/bounty");

bountyRoutes.route("/")
    .get(function (req, res) {
        console.log("get bounties");
        Bounty.find(function (err, bounties) {
            if (err) return res.status(500).send(err);
            return res.send(bounties);
        });
    })
    .post(function (req, res) {
        var bounty = new Bounty(req.body);
        bounty.save(function (err, newBounty) {
            if (err) return res.status(500).send(err);
            return res.status(201).send(newBounty);
        });
    });

bountyRoutes.route("/:id")
    .get(function (req, res) {
        Bounty.findById(req.params.id, function (err, bounty) {
            if (err) return res.status(500).send(err);
            return res.send(bounty);
        });
    })
    .put(function (req, res) {
        Bounty.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedBounty) {
            if (err) return res.status(500).send(err);
            console.log("sending after update " + JSON.stringify(updatedBounty));
            return res.send(updatedBounty);
        })
    })
    .delete(function (req, res) {
        Bounty.findByIdAndRemove(req.params.id, function (err, removedBounty) {
            if (err) return res.status(500).send(err);
            return res.send(removedBounty);
        })
    });

module.exports = bountyRoutes;