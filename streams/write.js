var fs=require("fs");
var data='Hello,Everyone.Welcome to Innominds.';
var writeStream=fs.createWriteStream("output.txt");
writeStream.write(data,'UTF-8');
writeStream.end();
writeStream.on('finish',function(){
  console.log('written successfully.');
});
writeStream.on('error',function (err) {
  console.log(err);
});
console.log('program ended.');
