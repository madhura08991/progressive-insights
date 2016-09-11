function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<div class=\"footer\" style=\"padding-top: 50px; border-top:1px solid #ccc; background-color:#E5E8E8\"> <div class=\"container\"> <div class=\"row\"> <div class=\"col-md-4\"> <p class=\"text-muted\"> Progressive Insights </p> </div> <div class=\"col-md-4\" style=\"display:inline\"> <div class=\"media-icons\" style=\"display:inline;padding:25px\"> <i class=\"fa fa-facebook-square fa-lg\" aria-hidden=\"true\"></i> </div> <div class=\"media-icons\" style=\"display:inline;padding:25px\"> <i class=\"fa fa-twitter fa-lg\" aria-hidden=\"true\"></i> </div> <div class=\"media-icons fa-lg\" style=\"display:inline;padding:25px\"> <i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i> </div> </div> <div class=\"col-md-2\"> <small> <p class=\"text-muted\"> Developed by Madhura Rajopadhye </p> </small> </div> </div> </div> </div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
