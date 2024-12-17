const EventEmitter = require("events");

const Logger = require("./1-Logger");

const logger = new Logger();
logger.on("event", (arg) => {
  console.log("Event with argument", arg);
});

logger.log("message");
