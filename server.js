var express = require("express");
var path = require("path");
var http = require("http");
var app = express();

app.get("/", function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    "ipaddress": req.headers["x-forwarded-for"],
    "language": req.headers['accept-language'].split(',')[0],
    "os": req.headers["user-agent"].split(/[()]/)[1]
  }));
});

var port = process.env.PORT || 1337;
http.createServer(app).listen(port);
