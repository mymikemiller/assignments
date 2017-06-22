var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    name: String
});

module.exports = mongoose.model("User", userSchema);