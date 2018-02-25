var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
/* function write(point) {
client.connect(url, (err, client) => {
    if (err) throw err;

    if (db.listCollections().toArray((err, collInfos) => {
      if (err) throw err;

      return collInfos.length;
    }) === 0) {
      db.createCollection('crimes', (err, _) => {
        if (err) throw err;
      });
      db.createCollection('restrooms', (err, _) => {
        if (err) throw err;
      });
      db.createCollection('trashcans', (err, _) => {
        if (err) throw err;
      });
    }

    function success(pos) {
      coords = pos.coords;
      return [coords.latitude, coords.longitude];
    }

    function failure(err) {
      throw err;
    }

    coords = navigator.geolocation.getCurrentPosition(success, failure);

    db.collection(foo).insertOne(coords, (err, _) => {
      if (err) throw err;
    })
  });
} */

function query() {
    return MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("citydata");
        // dbo.collection('points').find({}).toArray(function(err, result) {
            // if (err) throw err;
            // gloresult = result;
        // });
        return dbo.collection('points').find({});
    });
}

module.exports = {
    query
};