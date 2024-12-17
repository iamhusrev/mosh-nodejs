const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory / 1024 / 1024 / 1024}`); // Output: Total Memory: 8
console.log(`Free Memory: ${freeMemory / 1024 / 1024 / 1024}`); // Output: Total Memory: 8589934592, Free Memory: 3201693184

// Template string
// ES6 / ES2015 : ECMAScript 6
// String literals: Template strings
// ``
// ${} - String interpolation
// `Hello ${name}`
// `Hello ${name}, ${greeting}`
// `Hello ${name}, ${greeting}, ${message}`
// `Hello ${name}, ${greeting}, ${message}, ${expression}`
