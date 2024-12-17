var logger = require("./1-Module");
var logger2 = require("./3-PathModule");


// logger.log("message"); // Output: message
// console.log(logger); // Output: [Function: log] { endPoint: 'http://mylogger.io/log' }


logger2.log("message"); // Output: message
console.log(logger2); // Output: [Function: log] { endPoint: 'http://mylogger.io/log' }
