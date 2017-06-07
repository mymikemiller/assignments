var express = require("express");
var bodyParser = require("body-parser");
var uuid = require("uuid");
var app = express();
var path = require('path');

var bounties = [{
    firstName: "JarJar",
    lastName: "Binks",
    living: true,
    bounty: 100,
    type: "Sith",
    _id: "8866a41c-0027-44b3-9ba2-ff9d5f5bc9bb"
}]



app.get("/bounty", function (req, res) {
    console.log("get");
    res.send(bounties);
});

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));

app.post("/bounty", function (req, res) {
    console.log("post");
    var obj = req.body;
    obj._id = uuid.v4();
    bounties.push(obj);
    res.send("Success");
});

app.delete("/bounty/:id", function (req, res) {
    var id = req.params.id;
    console.log("delete " + id);
    console.log(bounties);
    var deletedItem;
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i]._id === id) {
            deletedItem = bounties[i];
            bounties.splice(i, 1);
            i--;
        }
    }
    res.send("Success " + JSON.stringify(deletedItem));
});

app.put("/bounty/:id", function (req, res) {
    var id = req.params.id;
    console.log("put " + id);
    var changedItem;
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i]._id == id) {
            changedItem = bounties[i];
            Object.keys(bounties[i]).forEach(function (key) {
                if (key != "_id") {
                    bounties[i][key] = req.body[key];
                }
            });
        }
    }
    res.send("Success " + JSON.stringify(changedItem));
});

app.listen(8000, function () {
    console.log("Server is running");
});
