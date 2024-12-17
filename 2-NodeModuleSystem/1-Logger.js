const EventEmitter = require("node:events");

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message);

    // Raise an event
    this.emit("event", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
