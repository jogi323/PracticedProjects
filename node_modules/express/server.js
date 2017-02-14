var express = require('express');
var bodyParser =require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));

app.get('/', function (req, res) {
     res.render('home');
});
app.get('/home', function (req, res) {
   res.render('home');
});
// app.post('/contact',urlencodedParser, function (req, res) {
//   console.log(req.body);
//    res.render('contact',{data:req.body});
// });
app.get('/contact',function(req,res){
  console.log(req.query);
  res.render('contact',{qs:req.query});
});
app.post('/contact',urlencodedParser,function(req,res){
    res.render('contact-success',{data:req.body});
});
app.get('/profile/:name',function(req,res){
  var data = {empId:2452,designation:'Associate Engineer',hobbies:['playing','reading','listening music']};
  res.render('profile' , { person: req.params.name,data:data} );
});
app.listen(2000);
console.log('programe is running in the given port.');
