var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
    user: String,
    post: String
});

module.exports = mongoose.model("Post", postSchema);