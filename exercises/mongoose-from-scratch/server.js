var express = require("express");
var mongoose = require("mongoose");
var port = process.env.PORT || 8000;

var app = express();


mongoose.connect("mongodb://localhost/phones");

var phoneSchema = new mongoose.Schema({
    name: String,
    manufacturer: String
});

var Phone = mongoose.model("Phone", phoneSchema);
var myPhone = new Phone({
    name: "G5",
    manufacturer: "LG"
});
myPhone.save(function (err) {
    Phone.find(function (err2, phones) {
        console.log(phones);
    });
});


app.listen(port, function () {
    console.log("server is running on port " + port);
});