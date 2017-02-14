var http=require("http");
var message= "Hello,Everyone.Welcome to innominds.";
var options = {
  host:'localhost',port:8080,path:'/',method:'post'
};
var request =http.request(options,function(response){
  response.on('data',function(data){
    console.log(data);
  });
});
request.write(message);
request.end();
