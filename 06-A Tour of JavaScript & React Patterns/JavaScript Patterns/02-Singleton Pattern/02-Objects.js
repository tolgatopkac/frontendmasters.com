let counter = 0;

// Create an object containing the `getCount`, `increment` and `decrement`method.

const counterObject= {
  getCount: () => counter,
  increment: () => ++counter,
  decrement: () => --counter,
}

const singletonCounter = Object.freeze(counterObject);

export default singletonCounter;




/* ALTERNATIVE  with export */
 let counter = 0;

export default Object.freeze({
  getCount: () => counter,
  increment: () => ++counter,
  decrement: () => --counter,
}); 


// not için commit