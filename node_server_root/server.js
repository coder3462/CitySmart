const express = require('express');
const path = require('path');

var app = express();
var router = express.Router();

router.route('/reportcrime')
    .post(function(res, req) {
        console.log('Reporting Crime');
    })
    .get(function(res, req) {
        console.log('');
    });

router.route('/recordtrash')
    .post(function(res, req) {
        console.log('Recording Trash');
    })
    .get(function(res, req) {
        console.log('');
    });

router.route('/recordbathroom')
    .post(function(res, req) {
        console.log('Recording Bathroom');
    })
    .get(function(res, req) {
        console.log('');
    });

app.use('/', express.static(path.resolve('./public')));
app.use('/api', router);

var server = app.listen(8080, function() {
  var port = server.address().port;
  console.log('Running on ' + port);
});


