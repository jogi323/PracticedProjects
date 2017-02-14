var events=require("events");
var eventEmitter= new events.EventEmitter();
var list1=function list1(){

};
var list2=function list2(){

};
eventEmitter.on("connection",list1);
eventEmitter.on("connection",list2);
var eventListener=events.EventEmitter.listenerCount(eventEmitter,"connection");
console.log(eventListener +" listener are there for connection.");

eventEmitter.removeListener("connection",list1);

var eventListener=events.EventEmitter.listenerCount(eventEmitter,"connection");
console.log(eventListener +" listener are there for connection.");


