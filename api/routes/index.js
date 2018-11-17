var express = require('express');
var router = express.Router();
var templateHandler = require('../handlers/templateHandler');

router.get('/api/templates', templateHandler.getTemplates);
router.get('/api/findTemplateById', templateHandler.findTemplateById);

router.post('/api/template/create', templateHandler.createTemplate);
router.post('/api/template/update', templateHandler.updateTemplate);

module.exports = router;