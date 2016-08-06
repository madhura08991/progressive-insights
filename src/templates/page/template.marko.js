function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      lasso_page = __loadTag(require("lasso/taglib/page-tag")),
      loadTemplate = __helpers.l,
      app_header_template = loadTemplate(require.resolve("../../ui-modules/app-header/template.marko")),
      app_footer_template = loadTemplate(require.resolve("../../ui-modules/app-footer/template.marko"));

  return function render(data, out) {
    lasso_page({
        name: data.name,
        packagePath: data.browser,
        dirname: __dirname,
        filename: __filename
      }, out);

<<<<<<< HEAD
    out.w("<head> <app-header></app-header> </head> <body> <h2> " +
      escapeXml(data.mainTitle) +
      " </h2> <app-footer></app-footer> </body>");
=======
    var name = "appHeaderTemplate",
        value = "src/ui-modules/app-header/template.marko";

    out.w("<head> ");

    app_header_template.render({}, out);

    out.w(" </head> <body> <h2> " +
      escapeXml(data.mainTitle) +
      " </h2> ");

    app_footer_template.render({}, out);

    out.w(" </body>");
>>>>>>> 3396825816240ad65710b98d07b6bdec7fb1d99e
  };
}

(module.exports = require("marko").c(__filename)).c(create);
