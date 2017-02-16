var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var multer  =   require('multer');
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/images');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});
var upload = multer({ storage : storage}).single('myfile');
mongoose.connect('mongodb://localhost/fileupload');
var Comment = new mongoose.Schema({
file:String
});
var MyModel = mongoose.model('files', Comment);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/home', function(req, res, next) {
  upload(req,res,function(err) {
       if(err) {
         console.log(err);
           return res.end("Error uploading file.");
       }
       res.end("File is uploaded successfully!");
   });
});

module.exports = router;
