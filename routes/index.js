var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.post('/getData', function(req, res, next) {
  // console.log("get data")
  return res.redirect('/home');
});


module.exports = router;
