var express = require("express");
var showsRoutes = express.Router();
var Show = require("../models/show");

showsRoutes.get("/", function (req, res) {
    Show.find(function (err, shows) {
        console.log(shows);
        return res.send(shows);
    });
});

showsRoutes.get("/:id", function (req, res) {
    console.log("get");
    return res.send("single character");
});

showsRoutes.put("/:id", function (req, res) {
    console.log("put");
    return res.send();
});

showsRoutes.post("/", function (req, res) {
    console.log("post");
    return res.send();
});

showsRoutes.delete("/:id", function (req, res) {
    console.log("delete");
    return res.send("delete");
});


module.exports = showsRoutes;