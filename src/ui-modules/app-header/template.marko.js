function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<div class=\"nav-bar\"> <ul> <li>Our Philosophy </li> <li> Organization </li> <li> Social Impact Lab </li> <li> Leadership </li> <li> Donations </li> <li> Contact Us </li> </ul> </div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
