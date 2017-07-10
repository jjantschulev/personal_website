//imports
var express = require("express");
var fs = require("fs");

//Initialise Variables:
var port = 3010;

//Standard Static file hosting
var app = express();
var server = app.listen(port);
app.use(express.static("public"));
console.log("Server Running on port " + port);
