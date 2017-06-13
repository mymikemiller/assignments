var mongoose = require("mongoose");

var spotSchema = new mongoose.Schema({
    lat: Number,
    lng: Number,
    name: String
});

module.exports = mongoose.model("Spot", spotSchema);