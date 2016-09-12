function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      lasso_page = __loadTag(require("lasso/taglib/page-tag")),
      loadTemplate = __helpers.l,
      app_header_template = loadTemplate(require.resolve("../../ui-modules/app-header/template.marko")),
      app_main_banner_template = loadTemplate(require.resolve("../../ui-modules/app-main-banner/template.marko")),
      app_info_section_template = loadTemplate(require.resolve("../../ui-modules/app-info-section/template.marko")),
      app_footer_template = loadTemplate(require.resolve("../../ui-modules/app-footer/template.marko"));

  return function render(data, out) {
    lasso_page({
        name: data.name,
        packagePath: data.browser,
        dirname: __dirname,
        filename: __filename
      }, out);

    out.w("<head> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> <link rel=\"stylesheet\" href=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css\"> <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js\"></script> <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\"> ");

    app_header_template.render({}, out);

    out.w(" </head> <body> <div class=\"container-fluid\"> ");

    app_main_banner_template.render(mainTitle = data.mainTitle, out);

    out.w(" ");

    app_info_section_template.render(contents = data.contents, out);

    out.w(" </div> <div class=\"footer\"> ");

    app_footer_template.render({}, out);

    out.w(" </div> </body>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
