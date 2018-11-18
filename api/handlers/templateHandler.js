var db = require('../db.js');

exports.createTemplate = function(req, res) {
    const response = { status: true };
    const newTemplateQuery = 'INSERT INTO `templateStore` (`name`, `description`, `image`, `javascriptCode`, `cssCode`, `isActive`) VALUES (?)';
    const query = db.format(newTemplateQuery, [Object.values(req.body)]);
    console.log(query);
    db.query(query, (err, result, fields) => {
        if (err) throw err;
        response['data'] = result;
        res.send(response);
    });
};

exports.findTemplateById = function(req, res) {
    const response = { status: true };
    const findByIdQuery = 'select * from templateStore where isActive != false';
    db.query(findByIdQuery, req.query.id, (err, result, fields) => {
        if (err) throw err;
        response['data'] = result;
        res.send(response);
    });
};

exports.getTemplates = function(req, res) {
    const response = { status: true };
    const getTemplatesQuery = 'select * from templateStore where isActive != false';
    db.query(getTemplatesQuery, (err, result, fields) => {
        if (err) throw err;
        response['data'] = result;
        res.send(response);
    });
};

exports.updateTemplate = function(req, res) {
    const response = {status: true};
    let updateQuery = "UPDATE templateStore SET ? WHERE ?";
    if (!Object.keys(req.body.query).length) {
        updateQuery = "UPDATE templateStore SET ? ";
    }
    let query = db.format(updateQuery, [req.body.data, req.body.query]);
    db.query(query, (err, result, fields) => {
        if (err) throw err;
        response['data'] = result;
        res.send(response);
    });
};

exports.getPartners = function(req, res) {
    const response = { status: true };
    const getTemplatesQuery = 'select pName from partner where pStatus = 1';
    db.query(getTemplatesQuery, (err, result, fields) => {
        if (err) throw err;
        response['data'] = result;
        res.send(response);
    });
};

exports.getCampaigns = function(req, res) {
    const response = { status: true };
    const customCampaignsQuery = 'select id, campName from partner_'+req.query.partnerName+'.custom where campName like "%extemplate%" order by id limit 20';
    console.log(customCampaignsQuery);
    db.query(customCampaignsQuery, (err, result, fields) => {
        if (err) throw err;
        response['data'] = result;
        res.send(response);
    });
};

exports.setCampaign = function(req, res) {
    const response = { status: true };
    let updateQuery = 'UPDATE partner_'+req.body.partnerName+'.custom SET ? WHERE id=?';
    let query = db.format(updateQuery, [req.body.data, req.body.id]);
    console.log(query);
    db.query(query, (err, result, fields) => {
        if (err) throw err;
        response['data'] = result;
        res.send(response);
    });
};

