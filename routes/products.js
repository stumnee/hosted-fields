var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const baseUrl = 'http://' + req.get('host') + '/images/';
    res.send([
        {id: "buc", name:"Buccaneer", price: 5, img: baseUrl + "pirate.png"},
        {id: "gi", name:"Soldier", price: 6, img: baseUrl + "gi.png"},
        {id: "fire", name:"Fire Fighter", price: 5.5, img: baseUrl + "firefighter.png"},
        {id: "turkey", name:"Turkey", price: 7.3, img: baseUrl + "turkey.png"}
    ]);
});

module.exports = router;
