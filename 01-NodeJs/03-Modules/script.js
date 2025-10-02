const fs = require('node:fs');

// ------------------- SYNC (Blocking) -------------------
console.log('Start of script');

// Blocking: execution stops until file is read
const content = fs.readFileSync('note.txt', 'utf-8');
console.log('Sync content:', content);

console.log('End of script (after sync read)');


// ------------------- ASYNC (Non-Blocking) -------------------
// Here, Node.js will not stop execution. It registers a callback and continues.
fs.readFile('note.txt', 'utf-8', function (error, data) {
    if (error) {
        console.log('Error while reading file:', error);
    } else {
        console.log('Async content:', data);
    }
});

console.log('This line runs immediately after async call is made');
