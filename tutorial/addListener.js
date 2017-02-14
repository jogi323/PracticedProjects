var events=require('events');
var eventEmitter= new events.EventEmitter();
var jogi= function jogi(){
    console.log("Jogi is the 1st listener");
};
var sai=function sai(){
    console.log("sai is the 2nd listener");
};
eventEmitter.addListener("Innominds",jogi);
eventEmitter.on("Innominds",sai);
var eventListener=events.EventEmitter.listenerCount(eventEmitter,"Innominds");
console.log(eventListener+"  Listeners are there.");
