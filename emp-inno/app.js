var express = require('express');

var bodyParser = require('body-parser');

var session = require('express-session')

var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'employee'
});

var app = express();

app.set('view engine','ejs');

app.use('/assets',express.static('assets'));


var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.get('/',function(req,res){
  res.render('login',{msg:''});
});
app.get('/signup',function(req,res){
  res.render('signup',{msg:''});
});
app.post('/login',urlencodedParser,function(req,res){
  // console.log(req.body);
connection.query("insert into details(username,email,password,conformpassword) values('"+req.body.username+"','"+req.body.email+"','"+req.body.password+"','"+req.body.password_confirm+"')",function(err,data){
  if(err){
    console.log(err);
    res.render('signup',{msg:'already registered username'});
    // console.log("Please enter valid Datails.");
  }else{
    res.render('login',{msg:''});
    console.log("success");
  }
});
});
app.post('/home',urlencodedParser,function(req,res){

connection.query('select * from details where username=? && password= ?',[req.body.username,req.body.password],function(err,data){
  if(err){
    console.log(err);
  }else{
    console.log(data)
    if(data == ""){
        console.log("You haven't Registered with us.");
        res.redirect('/');
    }else{
      req.session.username=req.body.username;
      // console.log(req.session);
      console.log(req.session);
      res.render('home');
    }
  }
});
});
app.get('/home',function(req,res){
  console.log(req.session);
  if(req.session.username){
      res.render('home');
  }else{
    res.redirect('/');
  }

});
// app.get('/home',function(req,res){
//   res.render('home');
// });
app.get('/logout',function(req,res){
  req.session.destroy();
  res.render('/');
});
app.listen(8008);

console.log("Welcome.");
