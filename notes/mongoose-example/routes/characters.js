var express = require("express");
var charactersRoutes = express.Router();
var Character = require("../models/show");

showsRoutes.get("/", function (req, res) {
    Character.find(function (err, character) {
        console.log(character);
        return res.send(character);
    });
});


charactersRoutes.get("/:id", function (req, res) {
    console.log("get");
    return res.send("single character");
});

charactersRoutes.put("/:id", function (req, res) {
    console.log("put");
    return res.send();
});

charactersRoutes.post("/", function (req, res) {
    console.log("post");
    return res.send();
});

charactersRoutes.delete("/:id", function (req, res) {
    console.log("delete");
    return res.send("delete");
});


module.exports = charactersRoutes;