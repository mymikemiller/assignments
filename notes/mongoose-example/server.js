var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = process.env.PORT || 7000;

var app = express();

mongoose.connect("mongodb://localhost/tv");

// var startrek = new Show({title: "Star Trek: The Next Generation", rating: 5});
// startrek.save();
//


app.use(bodyParser.json());
app.use(morgan('dev'));

app.listen(port, function () {
    console.log("server is running on port " + port);
});

app.use("/characters", require("./routes/characters.js"));
app.use("/shows", require("./routes/shows.js"));