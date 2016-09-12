function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<div class=\"footer\" style=\"padding-top: 50px; border-top:1px solid #ccc; background-color:#E5E8E8\"> <div class=\"container\"> <div class=\"row\"> <div class=\"col-md-4\"> <p style=\"font-size:12;\" class=\"text-muted\"> Progressive Insights &#0169; <br>All Rights Reserved</p> </div> <div class=\"col-md-4\" style=\"display:inline\"> <div class=\"media-icons\" style=\"display:inline;padding:25px 5px\"> <a href=\"https://www.facebook.com/progressiveinsights/\"> <i class=\"fa fa-facebook-square fa-2x\" aria-hidden=\"true\"></i> </a> </div> <div class=\"media-icons fa-2x\" style=\"display:inline;padding:25px 5px\"> <a href=\"https://www.linkedin.com/company/progressive-insights-data-science\"> <i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i> </a> </div> </div> <div class=\"col-md-4\"> <p style=\"font-size:10;text-align:right;padding-top:10px;\" class=\"text-muted\">Website Developed and Maintained by Madhura Rajopadhye </p> </div> </div> </div> </div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
