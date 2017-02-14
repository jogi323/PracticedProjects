var buf = new Buffer(1024);
var buf1=new Buffer('Hello Everyone');
var buf2=new Buffer(' Welcome to Innominds.');
var buf3=Buffer.concat([buf1 ,buf2]);
console.log(buf3.toString());
