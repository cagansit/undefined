var express = require('express');
var router = express.Router();
var templateHandler = require('../handlers/templateHandler');

router.get('/api/templates', templateHandler.getTemplates);
router.get('/api/findTemplateById', templateHandler.findTemplateById);

router.post('/api/template/create', templateHandler.createTemplate);
router.post('/api/template/update', templateHandler.updateTemplate);
router.get('/api/template/partners', templateHandler.getPartners);
router.get('/api/template/campaigns', templateHandler.getCampaigns);
router.post('/api/template/setCampaign', templateHandler.setCampaign);

module.exports = router;