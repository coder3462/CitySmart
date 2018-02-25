const mongo = require('mongodb');
const client = mongo.MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'citydata';

function write(point) {
  client.connect(url, (err, client) => {
    if (err) throw err;

    const db = client.db(dbName);
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
}

function query() {
    var pointscollection;
    client.connect(url, (err, client) => {
        if (err) throw err;
        const db = client.db(dbName);
        pointscollection = db.collection('points');
    });
    return pointscollection;
}

module.exports = {
    write,
    query
};