const ChatRoom = require("./ChatRoom.js");

const chat =new ChatRoom()

chat.on('join',(user)=>
{
    console.log(`${user} joined`);
    
})
chat.on('message',(user,message)=>
{
    console.log(`${user} : ${message}`);
    
})
chat.on('leave',(user)=>
{
    console.log(`${user} has left `);
    
})

// simulating the chat

chat.join('Alice')
chat.join('Bob')


chat.sendMessage('Alice' ,'hey Alice, Hello to everyone!!');
chat.sendMessage('Bob' ,'hey Bob, Hello to everyone!!')

chat.leave('Alice')
chat.sendMessage('Alice', 'this message wont be sent')
chat.leave('Bob')