var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200,{'counterType':'text/html'});
    var web= fs.createReadStream(__dirname + '/index.html','utf8');
    web.pipe(res);
  }else if(req.url === '/contact'){
  res.writeHead(200,{'counterType':'text/html'});
fs.createReadStream(__dirname + '/contact.html','utf8').pipe(res);
}else if(req.url === '/api'){
  var inno = {name:'Jogi',EmployeeID:'2452',age:'22'};
  res.writeHead(200,{'counterType':'application/json'});
res.end(JSON.stringify(inno));
} else{
  res.writeHead(404,{'counterType':'text/html'});
fs.createReadStream(__dirname + '/404.html','utf8').pipe(res);
}
}).listen(1200);
