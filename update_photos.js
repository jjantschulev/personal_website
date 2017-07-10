fs = require('fs');

savePhotoNames();


function getPhotoNames (collection) {
  //collection is a folder directory containing folders containing images
  var collectionInfo = {}
  var sectionNames = fs.readdirSync(collection);
  for (var i = sectionNames.length-1; i >= 0; i--) {
    if(sectionNames[i].substring(0, 1) == "*" || sectionNames[i].substring(0, 1) == "."){
      console.log(sectionNames[i]);
      sectionNames.splice(i, 1);
    }
  }
  console.log(sectionNames);
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
