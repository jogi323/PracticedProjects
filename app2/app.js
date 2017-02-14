
var express = require('express');

var bodyParser =require('body-parser');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'root',
  database : 'nodedb'
});


var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
app.get('/getdata', function(req, res){
  connection.query("select * from login", function(err, data){
    if(err){
      console.log(err);
    }
    else{
      console.log(data);
    }
  })
})
app.get('/',function(req,res){

  res.render('login',{msg:''});
});
app.post('/login',urlencodedParser,function(req,res){
  // var j=0;
  // // connection.query("select * from login", function(err, data){
  // //   if(err){
  // //     console.log(err);
  // //   }
  // //   else{
  // //     for(var i = 0; i<data.length; i++){
  // //       if(data[i].username == req.body.user && data[i].password == req.body.pass){
  // //         j++;
  // //       }
  // //     }
  // //     if(j==0){
  // //       console.log("wrong credentials");
  // //       res.render('login',{msg:'wrong credentials'});
  // //     }
  // //     else{
  // //       res.render('home',{msg:'succesfully logged in'});
  // //     }
  // //   }
  // // })
  connection.query("insert into login values('"+req.body.user+"','"+req.body.pass+"')", function(err,data){
    if(err){
      console.log(err);
    }
    else{
      console.log("inserted");
    }
  });
});
app.listen(3000);

console.log('hello!');
