var express =require("express");
// var flash = require('express-flash');
var bodyParser = require("body-parser");
var multer  = require('multer');
var upload = multer({ dest: './uploads' })
var mongoose = require('mongoose');
mongoose.promise = require("bluebird");
mongoose.connect('mongodb://localhost/emp');
var Comment = new mongoose.Schema({
  Fullname: { type: String },
  email: { type: String },
  password: { type: String},
  dateofbirth: { type: Date },
  Gender :{type:String},
  file :{type:String}
  // buff: Buffer
});
var count=0;
var myModel = mongoose.model('empDetails',Comment);

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine","ejs");

app.use(express.static('assets'));

app.get('/',function(req,res){
  if(count==1){
res.render('login',{msg:"Invalid Credintials"});
  }else{
      res.render('login',{msg:""});
  }

});
app.get('/signup',function(req,res){
  res.render('signup',{msg:''});
});
app.post('/home',urlencodedParser,function(req,res){
  count =0;
  // console.log(req.query);
  myModel.find({$and:[{'email':req.body.emailId},{'password':req.body.psw}]},function(err,data){
    // console.log(data);

    if(err){
      console.log(err);
    }else if(data==""){
      //  req.flash('info', 'Invalid Credintials');
       count=1;
      res.redirect('/');
    }else{
      res.render('home',{data:data});
    }
  });

});

app.post('/login',urlencodedParser,upload.single('file'),function(req,res){
  console.log(req.body);

var employee=myModel(req.body).save(function(err,data){
  if(err){
    res.render('signup',{msg:"Email-Id Already Registered."})
  }else{
  res.render('login',{msg:"Successfully Registered."});
  }
});
});
app.get('/login',function(req,res){
  res.render('login',{msg:''});
});
app.listen(8008);

console.log("Hello!");
