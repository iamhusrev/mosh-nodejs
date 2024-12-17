const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');



myEmitter.on('event', (arg) => {
  console.log('Event with argument', arg);
}
);

myEmitter.emit('event', { id: 1, url: 'http://mylogger.io' });


