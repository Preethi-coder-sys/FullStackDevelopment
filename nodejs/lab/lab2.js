const EventEmitter = require('events');
const eventEmitter=new EventEmitter();

eventEmitter.on('start',(fileName)=> {
    console.log("Start event:",fileName);
})
eventEmitter.on('end',(fileName)=> {
    console.log("end event:",fileName);
})

eventEmitter.emit('start','/input.txt');
eventEmitter.emit('end','/input.txt');

