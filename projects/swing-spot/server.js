var express = require("express");
var mongoose = require("mongoose");
var morgan = require("morgan");
var bodyParser = require("body-parser");
//var uuid = require("uuid");
var app = express();
var path = require('path');
var port = process.env.PORT || 7700;

app.use(morgan("dev"));
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost/locations", function (err) {
    if (err) {
        throw err;
    }
    console.log('connect to database');
});

app.use(bodyParser.json());

app.use("/locations", require("./routes/locationRoutes.js"));
app.use(express.static(path.join(__dirname, "public")));


app.listen(port, function () {
    console.log("Listening on port " + port);
})
