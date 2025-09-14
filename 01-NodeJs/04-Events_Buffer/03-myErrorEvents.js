const { error } = require('console');   // <-- not needed, you can remove this line
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// Attach a listener for "error"
eventEmitter.on('error', (err) => {
   console.error(`Error occurred: ${err.message}`);
});

// Emit an "error" event
eventEmitter.emit('error', new Error('Something went wrong'));
