var express = require("express");

var bodyParser = require("body-parser");

var session = require('express-session');
var mysql      = require('mysql');

var app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
saveUninitialized: true,
  cookie: { maxAge: 1000000 }
}));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');

app.use('/assets',express.static('assets'));
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'nodedatabase'
});
connection.connect();

app.post('/home',urlencodedParser,function(req,res){
  req.session.username = req.body.uname;
  console.log(req.session);
  if(req.session.username){
   res.render('home',{data:req.body});
 }else{
    res.redirect("/");
  }

connection.query("insert into login_table (username,password) values('"+ req.body.user+"','"+req.body.pass+"')",function(err,data){
  if(err){
    console.log("data not found.");
  } else{
  console.log(data);
  }
});
connection.end();
});
app.get('/',function(req,res){
  res.render('login');

});
app.post('/login',urlencodedParser, function(req, res){
  var count = 0;
    connection.query("select * from login_table", function(err,data){
      for(var i=0; i<data.length; i++){
        if(data[i].username == req.body.uname && data[i].password == req.body.password){
          count++;
        }
      }
      if(count == 0){
        console.log("invalid credentials");
      }
      else{
        res.render('home',{data:'success'});
      }
    })
})
// app.post('/home',urlencodedParser,function(req,res){
//   req.session.username = req.body.uname;
//   console.log(req.session);
//   if(req.session.username){
//    res.render('home',{data:req.body});
//  }else{
//     res.redirect("/");
//   }
// });
app.get('/getdata', function(req, res){
  connection.query("select * from login_table", function(err, data){
    if(err){
      console.log(err);
    }
    else{
      console.log(data);
    }
  })
  connection.end();
});
app.get('/home',function(req,res){
  console.log(req.session.username);
  if(req.session.username){
      res.render('home');
  }else{
    res.redirect("/");
  }
});
app.get('/signup',function(req,res){
  res.render('signup');
})
app.listen(8080);

console.log("Hello");
