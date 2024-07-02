// FOR REAL-TIME APPLICATIONS - u can create custom events and listen for events

import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

// functions execute when event is emitted
function greetHandler(name){
  console.log('Hi ' + name);
}

function byeHandler(name){
  console.log('bye ' + name);
}

// on method - to register for event listeners
// can have multiple event listeners (even for 1 event) or vice versa
myEmitter.on('greet', greetHandler);
myEmitter.on('bye', byeHandler);

// emit events - triggers events and passes arguments to respective listeners
myEmitter.emit('greet', 'Chandler');
myEmitter.emit('bye', 'Rachel');

// ERROR HANDLING
myEmitter.on('error', (err) => {
  console.log('An error occured', err);
});

// simulate error
myEmitter.emit('error', new Error('Something went wrong'));
