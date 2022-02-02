const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

// ## Event Emitter Methods ##
// 1.on is used to add a callback function that's going to be executed when the event is triggered
// 2.emit is used to trigger an event
// 3.once(): add a one-time listener
// 4.removeListener() / off(): remove an event listener from an event
// 5.removeAllListeners(): remove all listeners for an event

eventEmitter.on('start', (param, param2) => {
  console.log('started')
  console.log('parameter : ', param, param2)
})

// you can pass as much parameter as you want
eventEmitter.emit('start', 17, 34)
