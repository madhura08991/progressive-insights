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
      contact_form_template = loadTemplate(require.resolve("../../ui-modules/contact-form/template.marko")),
      contact_info_template = loadTemplate(require.resolve("../../ui-modules/contact-info/template")),
      app_footer_template = loadTemplate(require.resolve("../../ui-modules/app-footer/template.marko"));

  return function render(data, out) {
    lasso_page({
        name: data.name,
        packagePath: data.browser,
        dirname: __dirname,
        filename: __filename
      }, out);

    out.w("<head> ");

    app_header_template.render({}, out);

    out.w(" </head> <body> ");

    app_main_banner_template.render(mainTitle = data.mainTitle, out);

    out.w(" <div class=\"row\"> <div class=\"col\"> ");

    contact_form_template.render(formFields = data.contents[0].fields, out);

    out.w(" </div> <div class=\"col\"> ");

    contact_info_template.render(contact = data.contents[1].methods[0], out);

    out.w(" </div> <div class=\"row\"> ");

    contact_info_template.render(contact = data.contents[1].methods[1], out);

    out.w(" </div> </div> ");

    app_footer_template.render({}, out);

    out.w(" </body>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
