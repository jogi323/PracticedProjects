var fs= require('fs');
fs.readFile('text.txt',function(err,data){
  fs.writeFile('readMe.txt',data);
})

fs.writeFile("readme.txt","you guys supposed to report at our vizag office.",function(err){
  if(err){
    return console.log(err);
  };
});
fs.readFile('readme.txt',function(err,data){
  if(err){
    return console.log(err);
  };
  console.log(data.toString());
});
