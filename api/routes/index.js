var express = require('express');
var router = express.Router();
var templateHandler = require('../handlers/templateHandler');

router.get('/api/templates', templateHandler.getTemplates);

router.post('/api/template/create', templateHandler.createTemplate);

module.exports = router;