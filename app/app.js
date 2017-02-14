
var express = require('express');
var session = require('express-session')
var bodyParser =require('body-parser');
var app = express();
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host : 'localhost',
//   user : 'root',
//   password : 'root',
//   database : 'nodedb'
// });
// app.get('/getdata', function(req, res){
//   connection.query("select * from login", function(err, data){
//     if(err){
//       console.log(err);
//     }
//     else{
//       console.log(data);
//     }
//   })
// })
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000000 }
}));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
app.get('/contacts',function(req,res){
  res.render('contacts',{name: req.session.username});
});
app.get('/',function(req,res){

  res.render('login');
});
app.get('/home',function(req,res){
  console.log(req.session.username);
  if(req.session.username){
      res.render('home');
  }else{
    res.redirect("/");
  }

});
app.get('/logout',function(req,res){
  req.session.destroy();
  res.redirect('/');
})
app.get('/register',function(req,res){
  res.render('register');
});
app.post('/home',urlencodedParser,function(req,res){
    req.session.username = req.body.user;
    console.log(req.session);
    res.render('home');
});

app.listen(3000);

console.log('hello!');
