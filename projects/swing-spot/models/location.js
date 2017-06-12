var mongoose = require("mongoose");

var locationSchema = new mongoose.Schema({
    lat: Number,
    lng: Number,
    name: String
});

module.exports = mongoose.model("Location", locationSchema);