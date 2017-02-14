var fs=require("fs");
fs.open('text.txt','+r',function(err,fd){
  if(err){
    console.error(err);
  };
  console.log('The File opened successfully.');
});
