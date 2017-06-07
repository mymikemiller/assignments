var mongoose = require("mongoose");

var showSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    rating: Number,
    duration: String,
    price: Number,
    actors: [String],
    locations: [{
        street: String,
        city: String,
        state: String,
        country: String,
        coords: {
            lat: Number,
            long: Number
        }
    }]
});

module.exports = mongoose.model("Show", showSchema);
