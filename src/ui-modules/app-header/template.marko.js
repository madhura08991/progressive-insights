function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<nav class=\"navbar navbar-inverse\"> <div class=\"container-fluid\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navBarContent\" aria-expanded=\"false\"> </button> <a class=\"navbar-brand\" href=\"/\"> <img alt=\"Brand\" src=\"../lib/images/brand.jpg\"> </a> </div> <div class=\"collapse navbar-collapse\" id=\"#navBarContent\"> <ul class=\"nav navbar-nav\"> <li><a href=\"/philosophy\"> Our Philosophy </a></li> <li><a href=\"/organization\"> Organization </a></li> <li><a href=\"/social-impact-lab\"> Social Impact Lab </a></li> <li><a href=\"/leadership\"> Leadership </a></li> <li><a href=\"/contact\"> Contact Us </a></li> </ul> </div> </div> </nav>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
