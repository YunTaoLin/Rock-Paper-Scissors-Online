var express = require("express");
//gzip
var compression = require("compression");

const bodyParser = require("body-parser");


var app = express();

app.use(compression());
app.use(express.static(__dirname + "/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});
app.get("/event/", function (req, res) {
  res.sendFile(__dirname + "/dist/event/index.html");
});
app.get("/event/*", function (req, res) {
  res.sendFile(__dirname + "/dist/event/index.html");
});
app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});


module.exports = app;
