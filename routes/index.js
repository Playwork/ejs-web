var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: true })

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://playwork:12345@cluster0-4z3vr.mongodb.net/link', {
  useNewUrlParser: true
});

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));


// /*example  open connect mongo */
// db.once('open', function () {
//   // we're connected!
//   console.log("connected");
//   var schema = new mongoose.Schema({ username: 'string', password: 'string' });
//   var link = mongoose.model("user", schema);

//   link.findOne().then(function (res) {
//     console.log("res", res)
//   }).catch(err => console.log(err));
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', username: "...." });
});

router.get('/home', function(req, res, next) {

  const locationList = [ "",
                      "bangkok" , 
                      "samutparkarn" ,
                      "buriram"
                      ] 
  const followList = ["",
                     100,200,500,1000,2000 
                     ]
  const priceList  = ["",
                      "2,500.00", 
                      5000
                     ]
  const jobType = [ "",
                  'Reviewer',
                  'Blogger',
                  'Youtuber',
                  'Streamer',
                  'Bomber'
                ];
  const social = [ "",
                'Facebook',
                'Instagram',
                'Youtube',
                'Pantip'
                ];
  const gender = [ "",
                  'Male',
                  'Female'
                ];
  const category = [ "",
                    'Facebook',
                    'Instagram',
                    'Youtube',
                    'Pantip'
                  ];
          
  res.render('home', { 
    followList, 
    locationList:locationList, 
    priceList,
    jobType, 
    social, 
    gender,
    category
  });
});

router.post('/getData', function(req, res, next) {
   return res.redirect('/user');
});

router.post('/login', urlencodedParser, function(req, res, next) {
 
    const db = mongoose.connection;
  
    var schema = new mongoose.Schema({ username: 'string', password: 'string' });
    var link = mongoose.model("user", schema);
    link.findOne({username: req.body.username}).then(function (res1) {
      if(req.body.username == res1.username && req.body.password == res1.password){
        res.render('detail', { title: 'Express', status: "success" });
      } else {
        res.render('detail', { title: 'Express', status : "Fail !!!!!"});
      }
    }).catch(err => console.log(err));

});

module.exports = router;
