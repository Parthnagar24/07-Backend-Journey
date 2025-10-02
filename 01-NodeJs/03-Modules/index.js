
const fs = require('fs'); 
// Import built-in File System module 
// require('fs') → loads Node’s built-in File System module. 

console.log(fs); 
// Prints the fs object (lots of functions like readFileSync, writeFile, unlink, etc.)

const content = fs.readFileSync('note.txt', 'utf-8');
// Synchronously reads the contents of note.txt as a string (utf-8 encoding ensures text instead of Buffer)

console.log(content);

