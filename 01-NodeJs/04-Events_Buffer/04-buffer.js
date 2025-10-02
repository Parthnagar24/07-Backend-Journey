import { Buffer } from 'node:buffer';

// 1. Creates a zero-filled Buffer of length 10
const buf1 = Buffer.alloc(10);

// 2. Creates a Buffer of length 10, filled with value 1
const buf2 = Buffer.alloc(10, 1);

// 3. Creates an uninitialized Buffer of length 10
// ⚡ Faster than Buffer.alloc() but may contain old memory data
const buf3 = Buffer.allocUnsafe(10);

// 4. Creates a Buffer from an array of bytes
const buf4 = Buffer.from([1, 2, 3]);

// 5. Values are truncated to fit 0–255
// Numbers >255 → modulo 256, floats → truncated, non-numbers → converted if possible
const buf5 = Buffer.from([257, 257.5, -255, '1']);

// 6. Creates a UTF-8 Buffer from a string
// 'tést' → [0x74, 0xc3, 0xa9, 0x73, 0x74]
const buf6 = Buffer.from('tést');

// 7. Creates a Latin-1 encoded Buffer from a string
// 'tést' → [0x74, 0xe9, 0x73, 0x74]
const buf7 = Buffer.from('tést', 'latin1');

console.log(buf1, buf2, buf3, buf4, buf5, buf6, buf7);
