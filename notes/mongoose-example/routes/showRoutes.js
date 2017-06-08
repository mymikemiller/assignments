var express = require("express");
var showRoutes = express.Router();
var Show = require("../models/show");

showRoutes.get("/", function (req, res) {
    Show.find(function (err, shows) {
        console.log(shows);
        return res.send(shows);
    });
});

showRoutes.get("/:id", function (req, res) {
    console.log("get");
    return res.send("single character");
});

showRoutes.put("/:id", function (req, res) {
    console.log("put");
    return res.send();
});

showRoutes.post("/", function (req, res) {
    console.log("post");
    return res.send();
});

showRoutes.delete("/:id", function (req, res) {
    console.log("delete");
    return res.send("delete");
});


module.exports = showRoutes;