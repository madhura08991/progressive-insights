var fs = require("file-system");
var circularJSON = require('circular-json');
module.exports = function(request) {
  fs.writeFile("./request.txt", circularJSON.stringify(request.query), function(err) {
  });
};
