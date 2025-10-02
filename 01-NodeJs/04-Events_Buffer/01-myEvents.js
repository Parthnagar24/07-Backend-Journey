const EventEmitter = require('events'); // Import events module

// Create an event emitter object
const eventEmitter = new EventEmitter();

// ------------------- EVENT LISTENERS -------------------

// "on" → listens every time the event is triggered
eventEmitter.on("greet", (username) => {
    console.log(`Hello ${username}`);
});

// "once" → listens only once (first emit)
eventEmitter.once("pushnotify", () => {
    console.log('Run once!');
});

// Define a listener function separately
const myListener = () => console.log("I am a test listener");
eventEmitter.on("test", myListener);

// ------------------- EVENT EMITS -------------------

// Emit "greet" without data → will log "Hello undefined"
eventEmitter.emit("greet");

// Emit "greet" with data
eventEmitter.emit("greet", "Parth");

// Emit "pushnotify" twice → runs only the first time
eventEmitter.emit("pushnotify");
eventEmitter.emit("pushnotify");

// Emit "test"
eventEmitter.emit("test");

// Remove "test" listener
eventEmitter.removeListener("test", myListener);

// After removing, nothing will happen
eventEmitter.emit("test");

// ------------------- CHECK ACTIVE LISTENERS -------------------
console.log("Listeners for 'test':", eventEmitter.listeners("test"));
console.log("Listeners for 'greet':", eventEmitter.listeners("greet"));
