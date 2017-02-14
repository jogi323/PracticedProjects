var http=require('http');
var fs=require('fs');
var readerStream=fs.createReadStream(__dirname + '/Express/index.html','utf8');
readerStream.on('data',function(Inno){
  console.log('Info has received.');
  console.log(Inno);
});
fs.readFile(__dirname + '/Express/index.html',function(err,data){
  console.log(data.toString());
})
