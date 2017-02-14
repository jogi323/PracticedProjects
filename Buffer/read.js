var buf=new Buffer(1024);
for(var i=0;i<1024;i++){
  buf[i]=i+50;
};
console.log(buf.toString('ascii',0,25));
