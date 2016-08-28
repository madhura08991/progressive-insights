function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<div class=\"app-footer\" style=\"padding-top: 50px; border-top:1px solid #ccc\"> <footer class=\"footer\"> <div class=\"container\"> <div class=\"row\"> <div class=\"col-md-6\"> <p class=\"text-muted\"> Progressive Insights </p> </div> <div class=\"col-md-4\"> <div class=\"media-icons\"> <i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i> </div> <div class=\"media-icons\"> <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> </div> <div class=\"media-icons\"> <i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i> </div> </div> <div class=\"col-md-2\"> <p> Developed by Madhura Rajopadhye </p> </div> </div> </div> </footer> </div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
