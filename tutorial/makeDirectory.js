var fs = require("fs");

console.log("Going to create directory /tmp/test");
fs.mkdir('c:/jogi/projects',function(err){
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});
