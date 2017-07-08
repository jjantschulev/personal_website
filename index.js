//Initialise Variables:
var port = 3010;

//Standard Static file hosting
var express = require("express");
var app = express();
var server = app.listen(port);
app.use(express.static("public"));
console.log("Server Running on port " + port);
