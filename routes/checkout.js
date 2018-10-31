var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
var config = require('../config/config');

router.post('/', function(req, res, next) {
    let total = req.body.total;

    //conversion 3.5 => 3.50
    if (total.match(/\.\d$/)) {
        total += '0'
    }

    fs.readFile('public/generate-request.xml', 'utf8', function(err, contents) {
        contents = contents.replace('{amount}', total)
            .replace('{returnUrl}', config.vantiv.returnUrl)
            .replace('{accountId}', config.vantiv.accountId)
            .replace('{accountToken}', config.vantiv.accountToken)
            .replace('{applicationId}', config.vantiv.applicationId)
            .replace('{applicationName}', config.vantiv.applicationName)
            .replace('{acceptorId}', config.vantiv.acceptorId)

        request.post({
            url: config.vantiv.url, //https://certtransaction.elementexpress.com
            headers: {'Content-Type': 'text/xml'},
            body: contents
        }, function(error, response, payload){
            if (error) {
                res.status(500)
                res.render('error', {error: error})
            } else {
                console.log("VANTIV RESPONSE", payload)

                const matches = payload.match("<TransactionSetupID>([^<]+)</TransactionSetupID>");
                if (matches) {
                    const tId = matches[1]
                    var iframeUrl = config.vantiv.iframeUrl.replace('{transactionSetupId}', tId);

                    console.log('iFrame url', iframeUrl);

                    res.send(iframeUrl);
                } else {
                    res.status(500)
                    res.render('error', {error: payload})
                }

            }
        })
    });
});

module.exports = router;
