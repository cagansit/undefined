var db = require('../db.js');

exports.createTemplate = function(req, res) {
    console.log('Req: ', req);
    // db.query(`INSERT INTO exTemplates (template_name, template_image, template_js, template_css) VALUES ()`);
};

exports.findTemplateById = function(req, res) {

};

exports.getTemplates = function(req, res) {
    console.log('get templates');
};