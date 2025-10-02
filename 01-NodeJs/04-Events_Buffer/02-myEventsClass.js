const EventEmitter = require('events');

// Create a Chat class that inherits from EventEmitter
class Chat extends EventEmitter {
    // Method to send a message
    sendMessage(msg) {
        console.log(`Message sent : ${msg}`);
        
        // Emit a custom event "messageReceived"
        this.emit("messageReceived", msg);
    }
}

// Create a Chat instance
const chat = new Chat();

// Register a listener for the "messageReceived" event
chat.on("messageReceived", (msg) => {
    console.log(`New message: ${msg}`);
});

// Trigger the event by calling sendMessage
chat.sendMessage("hello world");
