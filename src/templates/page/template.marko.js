function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      lasso_page = __loadTag(require("lasso/taglib/page-tag"));

  return function render(data, out) {
    lasso_page({
        name: data.name,
        packagePath: data.browser,
        dirname: __dirname,
        filename: __filename
      }, out);

    out.w("<head> <app-header></app-header> </head> <body> <h2> \"" +
      escapeXml(data.mainTitle) +
      "\" </h2> <app-footer></app-footer> </body>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
