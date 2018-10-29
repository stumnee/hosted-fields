var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Transaction = mongoose.model('Transaction');


router.get('/', function(req, res, next) {
  console.log(req);
  var transaction = new Transaction(req.query);
  transaction.save(function (err) {
      if (err) {

          console.log("err")
      } else {
          console.log("ok");
      }
  });
  res.send('OK');
});

router.post('/', function(req, res, next) {
    console.log(req);
    res.send('OK');
});

module.exports = router;