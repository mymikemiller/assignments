var mongoose = require("mongoose");

var characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    species: String,
    color: [String],
    nationality: String
});

module.exports = mongoose.model("Character", characterSchema);