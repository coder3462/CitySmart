const express = require('express');
const path = require('path');

var app = express();

app.use(express.static(path.resolve('./public')));

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Running on ' + port);
});

var example = (req, res) => {
    res.send("Example");
}
app.post('/api/example', example);
