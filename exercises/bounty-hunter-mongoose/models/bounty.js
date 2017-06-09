var mongoose = require("mongoose");

var bountySchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    living: Boolean,
    bounty: Number,
    type: String,
});

module.exports = mongoose.model("Bounty", bountySchema);