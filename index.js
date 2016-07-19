var express = require('express');
var app = express();
var marko = require('marko');
require('marko/node-require').install();
var template = require('./src/templates/home/template.marko');

app.get('/', function(req, res) {
    // Render directly to the writable HTTP output stream:
    template.render({
            name: 'Frank'
        }, res);
});

  var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});
