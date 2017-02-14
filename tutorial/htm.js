var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
  res.writeHead(200,{'counterType':'text/html'});
  var web= fs.createReadStream(__dirname + '/Express/home.html','utf8');
  web.pipe(res);
}).listen(1500);
