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


savePhotoNames();


function getPhotoNames (collection) {
  //collection is a folder directory containing folders containing images
  var collectionInfo = {}
  var sectionNames = fs.readdirSync(collection);
  sectionNames.splice(sectionNames.indexOf(".DS_Store"), 1);
  collectionInfo.sectionNames = sectionNames;
  for (var i = 0; i < sectionNames.length; i++) {
    var pictureNames = fs.readdirSync(collection + "/" + sectionNames[i]);
    collectionInfo[i] = pictureNames;
  }
  return collectionInfo;
}

function savePhotoNames() {
  var json_data = JSON.stringify(getPhotoNames("public/data/images/stefanPhotos/collection"));
  fs.writeFile("public/data/images/stefanPhotos/photoNames.json", json_data, function(err) {
    if(err) {
        return console.log(err);
    }
});
}
