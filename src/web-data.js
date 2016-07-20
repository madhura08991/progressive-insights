'use strict';

module.exports = function(request) {
  if(request == 'philosophy') {
    return {
      "browser": "../../browser.json",
      "name": "Progressive Insights",
      "mainTitle": "Our Philosophy",
      "contents": [
        {"type": "para",
        "text":"At Progressive Insights, the primary goal of our dedicated"+
       "group of volunteers is to empower social sector institutions (non-profit"+
       "institutions serving the public good) make better decisions via a more data-driven"+
       " and systems-thinking approach."},
       {
         "type":"para",
         "text":"At Progressive Insights, our volunteers are driven by the following set of values:"
       },
       {
         "type": "ul",
         "items": ["Selfless service to others", "Professionalism", "Ethical Integrity"]
       },
       {
         "type": "para",
         "text": "At Progressive Insights, we believe that a group of thoughtful, committed citizens can change the world."
       },
       {
         "type": "para",
         "text":"We are committed about reaching our vision of empowering social sector"+
         " institutions to use data driven approaches and factual insights. Our mission is "+
         "to enable data science initiatives in social sector institutions and measure their continuous progress."
       }
     ]
   };
 }
   if(request == 'organization') {
     return {};
   }
   if(request == 'social-impact-lab') {
     return {};
   }
   if(request == 'leadership'){
     return {};
   }
   if(request == 'donations') {
     return {};
   }
   if(request == 'contact') {
     return {};
   }
};
