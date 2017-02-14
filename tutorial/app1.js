var fs = require("fs");

var data = fs.readFileSync('index.txt');

console.log(data.toString());
console.log("Program Ended");