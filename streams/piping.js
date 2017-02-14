var fs=require('fs');
var readerStream=fs.createReadStream('input.txt');
var writerStream=fs.createWriteStream('output.js');
readerStream.pipe(writerStream);
console.log('bye!');
