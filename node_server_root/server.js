const express = require('express');
const mongo = require('mongodb');
const path = require('path');

var app = express();
var router = express.Router();

router.route('/reportcrime')
    .post(function(res, req) {
        console.log('Reporting Crime');
    })
    .get(function(res, req) {
        console.log('Ginder');
    });

router.route('/recordtrash')
    .post(function(res, req) {
        console.log('Recording Trash');
    })
    .get(function(res, req) {
        console.log('Ginder');
    });

router.route('/recordbathroom')
    .post(function(res, req) {
        console.log('Recording Bathroom');
    })
    .get(function(res, req) {
        console.log('Ginder');
    });

app.use('/', express.static(path.resolve('./public')));
app.use('/api', router);

var server = app.listen(8080, function() {
  var port = server.address().port;
  console.log('Running on ' + port);
});

const client = mongo.MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'foos';

function log(foo) {
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
