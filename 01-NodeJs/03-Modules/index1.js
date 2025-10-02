// Import Node.js built-in File System (fs) module
const fs = require('node:fs');

// ------------------- READ -------------------
// Read the content of "note.txt" synchronously (blocking)
// 'utf-8' makes sure we get a readable string instead of a raw buffer
const content = fs.readFileSync('note.txt', 'utf-8');

// ------------------- WRITE -------------------
// Create or overwrite the file "copy.txt" with the given text
// If "copy.txt" already exists, old content will be replaced
fs.writeFileSync('copy.txt', 'I want to write this', 'utf-8');

// ------------------- APPEND -------------------
// Append new content to "copy.txt"
// '\nhey' = newline + "hey"
fs.appendFileSync('copy.txt', '\nhey', 'utf-8');

// ------------------- MAKE DIRECTORY -------------------
// Create nested directories: games/xyz/a
// { recursive: true } ensures parent folders are created if missing
fs.mkdirSync('games/xyz/a', { recursive: true });

// ------------------- REMOVE DIRECTORY -------------------
// Remove the folder "games/xyz/a"
// { recursive: true } removes contents inside too (⚠️ use carefully!)
fs.rmdirSync('games/xyz/a', { recursive: true });

// ------------------- OUTPUT -------------------
// Finally, print the content of "note.txt" that we read earlier
console.log(content);
