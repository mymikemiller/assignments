var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
    post: String,
    user: String,
    comment: String
});

module.exports = mongoose.model("Comment", commentSchema);