var express = require("express");
var path = require("path");
var http = require("http");
var useragent = require("express-useragent");
var app = express();

app.use(useragent.express());

app.get("/", function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    "ipaddress": req.connection.remoteAddress,
    "language": req.headers['accept-language'].split(',')[0],
    "software": req.useragent.os
  }));
});

var port = process.env.PORT || 1337;
http.createServer(app).listen(port);
