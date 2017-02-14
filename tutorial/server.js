var http=require('http');
var fs =require('fs');

http.createServer(function(req,res){

  res.writeHead(200,{'counterType':'text/plain'});
  var info=fs.createReadStream('text.txt','utf8');
  info.pipe(res);
}).listen(4000);
