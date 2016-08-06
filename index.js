var express = require('express');
var app = express();
var marko = require('marko');
require('marko/node-require').install();
var homeTemplate = require('marko').load(require.resolve('./src/templates/home/template.marko'));
var pageTemplate = require('marko').load(require.resolve('./src/templates/page/template.marko'));
var leadrTemplate = require('marko').load(require.resolve('./src/templates/page/template.marko'));
var contTemplate = require('marko').load(require.resolve('./src/templates/contact/template.marko'));

var getData = require('./src/web-data');

require('marko/node-require').install();

app.get('/', function(req, res) {
    homeTemplate.render({}, res);
});

app.get('/philosophy', function(req, res) {
    pageTemplate.render(getData('philosophy'), res);
})

app.get('/organization', function(req, res) {
    pageTemplate.render(getData('organization'), res);
})

app.get('/social-impact-lab', function(req, res) {
    pageTemplate.render(getData('social-impact-lab'), res);
})

app.get('/leadership', function(req, res) {
    pageTemplate.render(getData('leadership'), res);
})

app.get('/donations', function(req, res) {
    pageTemplate.render(getData('donations'), res);
})

app.get('/contact', function(req, res) {
    pageTemplate.render(getData('contact'), res);
})

  var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

});
