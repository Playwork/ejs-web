var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://playwork:12345@cluster0-4z3vr.mongodb.net/link', {
  useNewUrlParser: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


/*example  open connect mongo */
db.once('open', function () {
  // we're connected!
  console.log("connected");
  var schema = new mongoose.Schema({ username: 'string', password: 'string' });
  var link = mongoose.model("user", schema);

  link.findOne().then(function (res) {
    console.log("res", res)
  }).catch(err => console.log(err));
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});


router.post('/getData', function(req, res, next) {
   return res.redirect('/user');
});


module.exports = router;
