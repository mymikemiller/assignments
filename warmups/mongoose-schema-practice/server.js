var express = require("express");
var mongoose = require("mongoose");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var port = process.env.PORT || 7500;

var app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose.connect("mongodb://localhost/reddit")

app.listen(port, function () {
    console.log("server is listening on port " + port);
});

app.use("/users", require("./routes/userRoutes"));
app.use("/posts", require("./routes/postRoutes"));
app.use("/comments", require("./routes/commentRoutes"));
app.use("/tags", require("./routes/tagRoutes"));