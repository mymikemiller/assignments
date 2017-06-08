var express = require("express");
var characterRoutes = express.Router();
var Character = require("../models/character");

characterRoutes.get("/", function (req, res) {
    Character.find(function (err, character) {
        console.log(character);
        return res.send(character);
    });
});

characterRoutes.get("/:id", function (req, res) {
    console.log("get");
    return res.send("single character");
});

characterRoutes.put("/:id", function (req, res) {
    console.log("put");
    return res.send();
});

characterRoutes.post("/", function (req, res) {
    console.log("post");
    return res.send();
});

characterRoutes.delete("/:id", function (req, res) {
    console.log("delete " + req.id);
    Character.remove({id: req.id}, true);
    return res.send("delete");
});


module.exports = characterRoutes;