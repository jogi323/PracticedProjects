var buf=new Buffer(256);
var length=buf.write('Hello Everyone.');
console.log(length);
console.log(buf.toString('ascii',0,5));
