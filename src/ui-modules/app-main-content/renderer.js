module.exports = require('marko-widgets').defineRenderer({
    template: require('./template.marko'),

    getTemplateData: function(state, input) {
        return {
            name: input.name
        };
    }
});
