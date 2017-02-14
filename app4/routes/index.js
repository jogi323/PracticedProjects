var express = require('express');
var router = express.Router();
var myModel = require('../app.js').myModel;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login',{msg:''});
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});
router.post('/login', function(req, res, next) {
  console.log("dfjliweahfiuoweahvfiuearghilursagiusrua");
  var users = myModel(req.body).save(function(err,data){
    if(err){
      throw err;
    }else{
      res.render('login',{msg:'Successfully registered.'});
    }
  });

});

module.exports = router;
