/**
 * Created by mike on 6/5/17.
 */

var express = require("express");
var app = express();

var port = process.env.PORT || 8000;

var cartoons = [
    {
        name: "Mickey Mouse",
        species: "Mouse"
    },
    {
        name: "Donald Duck",
        species: "Duck"
    },
    {
        name: "Minnie Mouse",
        species: "Mouse"
    },
    {
        name: "Goofy",
        species: "Dog"
    }
];

app.listen(8000, function () {
    console.log("Server is running on port " + port);
});

app.get("/cartoons", function (req, res) {
    var filteredCartoons = cartoons;
    if (req.query.species) {
        filteredCartoons = cartoons.filter(function (obj) {
            return obj.species.toLowerCase() === req.query.species.toLowerCase();
        });
    }
    return res.send(filteredCartoons);
});