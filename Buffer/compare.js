var buf1=new Buffer('1234');
var buf2=new Buffer('1234');
var result=buf1.compare(buf2);
if(result < 0){
  console.log(buf1 +"comes before"+ buf2);
}else if(result = 0){
  console.log(buf1 +"same as"+ buf2);
}else{
  console.log(buf1 +"after"+ buf2);
};
