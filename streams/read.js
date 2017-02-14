var fs=require('fs');
var data='';
var readerStream=fs.createReadStream('input.txt');
readerStream.setEncoding('UTF-8');
readerStream.on('data',function(jogi){
  data += jogi;
});
readerStream.on('end',function () {
  console.log(data);
});
readerStream.on('error',function (err) {
  console.log(err);
});console.log("program ended");
