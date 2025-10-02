const EventEmitter = require('events');

class ChatRoom extends EventEmitter {
  constructor() {
    super();
    this.users = new Set(); // store unique users
  }

  // Add a user to the room
  join(user) {
    this.users.add(user);
    this.emit('join', user);
  }

  // Send a message if user exists in the room
  sendMessage(user, message) {
    if (this.users.has(user)) {
      this.emit('message', user, message);
    } else {
      console.log(`${user} is not in the room`);
    }
  }

  // Remove a user from the room
  leave(user) {
    if (this.users.has(user)) {
      this.users.delete(user);
      this.emit('leave', user);
    } else {
      console.log(`${user} is not in the room`);
    }
  }
}

module.exports = ChatRoom;