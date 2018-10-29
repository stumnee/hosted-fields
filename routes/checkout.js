var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
const vantivIFrameUrl = "https://certtransaction.hostedpayments.com/?TransactionSetupID=";//4770ADFB-3150-44E2-BB00-19E62B92FA29

router.post('/', function(req, res, next) {
    const total = req.body.total;

    fs.readFile('public/generate-request.xml', 'utf8', function(err, contents) {
        request.post({
            url: 'https://certtransaction.elementexpress.com',
            headers: {'Content-Type': 'text/xml'},
            body: contents.replace('{amount}', total)
        }, function(error, response, payload){
            if (error) {
                res.status(500)
                res.render('error', {error: error})
            } else {
                console.log("VANTIV RESPONSE", payload)

                const matches = payload.match("<TransactionSetupID>([^<]+)</TransactionSetupID>");
                if (matches) {
                    const tId = matches[1]
                    console.log(vantivIFrameUrl, tId)

                    res.send(vantivIFrameUrl + tId);
                }

            }
        })
    });
});

module.exports = router;
