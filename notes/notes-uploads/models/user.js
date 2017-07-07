var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    image: String
});

module.exports = mongoose.model("User", userSchema);