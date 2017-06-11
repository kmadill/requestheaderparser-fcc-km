var express = require("express");
var path = require("path");
var http = require("http");

var app = express();

app.get("/", function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    "ipaddress": req.ip,
    "language": req.headers['accept-language'],
    "software": req.headers['user-agent']
  }));
});

var port = process.env.PORT || 1337;
http.createServer(app).listen(port);
