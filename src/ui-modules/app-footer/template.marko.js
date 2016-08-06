function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<div class=\"footer\"> App Footer </div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
