const path = require("path");

var pathObj = path.parse(__filename);

console.log(pathObj); // Output: { root: 'C:\\', dir: 'C:\\Users\\User\\Desktop\\NodeJS\\NodeJS-Practice\\2-NodeModuleSystem', base: '3-PathModule.js', ext: '.js', name: '3-PathModule' }  // __filename is a global object that gives the path of the current file
