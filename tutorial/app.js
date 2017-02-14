
var http=require("http");
http.createServer(function(request,response){
    response.writeHead(200,{'counterType':'text/plain'});
    response.end('Hello World!Welcomes u all.');
}).listen(8081);
console.log("Server running at http://127.0.1:8081");