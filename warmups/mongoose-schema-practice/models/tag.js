var mongoose = require("mongoose");

var tagSchema = new mongoose.Schema({
    post: String,
    tag: String
});

module.exports = mongoose.model("Tag", tagSchema);