var events =require("events");
var eventEmitter =new events.EventEmitter();
var eventHandler = function connected(){
    console.log('connection successfully');
    eventEmitter.emit('data');
};
eventEmitter.on('connection',eventHandler);
eventEmitter.on('data',function(){
     console.log('Data received successfully.so u can go ahead.');
});
eventEmitter.emit('connection');
console.log("finally,program ended");
