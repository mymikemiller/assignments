/**
 * Created by mike on 6/5/17.
 */

var express = require("express");
var app = express();

var port = process.env.port || 8000;

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

app.use(require("./middleware.js"));


app.get("/cartoons", function (req, res) {
    cartoons.forEach(function (obj) {
        obj.company = req.company;
    });
    return res.send(cartoons);
});

app.listen(port, function () {
    console.log("Server is running on port " + port);
});