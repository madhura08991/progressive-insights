function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<nav class=\"navbar\"> <div class=\"container-fluid\" style=\"border-bottom:3px solid #ccc\"> <div class=\"navbar-header\" style=\"height:130px\"> <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navBarContent\" aria-expanded=\"false\"> </button> <a class=\"navbar-brand\" href=\"/\"> <img style=\"height:120px;width:233px; padding-bottom:10px\" alt=\"Brand\" src=\"https://cloud.githubusercontent.com/assets/14004112/18421874/a0989290-7861-11e6-85b5-73a2ce5fbffc.jpg\"> </a> </div> <div class=\"collapse navbar-collapse\" id=\"#navBarContent\"> <ul class=\"nav navbar-nav\" style=\"padding-top:45px\"> <li><a href=\"/philosophy\"> Our Philosophy </a></li> <li><a href=\"/organization\"> Organization </a></li> <li><a href=\"/social-impact-lab\"> Social Impact Lab </a></li> <li><a href=\"/leadership\"> Leadership </a></li> <li><a href=\"/contact\"> Contact Us </a></li> </ul> </div> </div> </nav>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
