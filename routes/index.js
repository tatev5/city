var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});
router.get('/login', function(req, res, next) {
  res.render('index');
});

router.get('/account', function(req, res, next) {
  res.render('account');
});


module.exports = router;
