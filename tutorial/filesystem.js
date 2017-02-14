var fs=require("fs");
//synchronous read
var text=fs.readFileSync('text.txt');
console.log(text.toString());
console.log('This is synchronous read.');
//Asynchronous read
fs.readFile('text.txt',function(err,data){
  if(err){
    console.error(err);
  };
  console.log(data.toString());
});
console.log('This is asychronous read.');
//To Open a File
