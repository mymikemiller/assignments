var express = require("express");
var app = express();
var path = require("path");
var multer = require("multer");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var User = require("./models/user");

app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/uploads", function (err) {
    if (err) throw err;
    console.log("Connected to mongoDB");
});

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        var origNameArr = file.originalname.split(".");
        console.log(origNameArr[0]);

        cb(null, origNameArr[0] + '-' + datetimestamp + '.' + origNameArr[origNameArr.length - 1]);
    }
});

var upload = multer({storage: storage}).single("file");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "uploads")));

app.get("/api/users", function (req, res) {
    User.find(function (err, users) {
        res.send(users);
    });
});

app.post("/api/upload", upload, function (req, res) {
    console.log("in POST for upload");
    var user = new User(req.body.info);
    user.image = req.file.filename;
    user.save(function (err) {
        if (err) return res.status(500).send(err);
        return res.send(user);
    });
});

app.listen(8000, function () {
    console.log("App is listening on port 8000");
});