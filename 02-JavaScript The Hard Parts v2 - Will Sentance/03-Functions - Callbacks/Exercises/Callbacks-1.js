//csbin.io/callbacks
// Challenge 1
// Create a function addTwo that accepts one input and adds 2 to it.

function addtwo(num) {
  return num + 2;
}

// ----------------------------------------------------------------
// Challenge 2
// Create a function addS that accepts one input and adds an "s" to it.
// Challenge 2
function addS(word) {
  return word + "s";
}

// -----------------------!!!!!------------------------------------
// Challenge 3
/* Create a function called map that takes two inputs:
an array of numbers (a list of numbers)
a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. */

function map(array, callback) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]));
  }
  return newArr;
}

console.log(map([1, 2, 3], addTwo));

// -----------------------!!!!!------------------------------------
// Challenge 4
// Create a function called forEach that takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEach(letters, function (char) {
  alphabet += char;
});
console.log(alphabet); //prints 'abcd'

// -----------------------!!!!!------------------------------------
// Challenge 5
/* In challenge 3, you've created a function called map. In this challenge, you're going to rebuild the map function by creating a function called mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop. */

function mapWith(array, callback) {
  const newArr = [];
  forEach(array, (item) => {
    newArr.push(callback(item));
  });
  return newArr;
}

// -----------------------!!!!!------------------------------------
// Challenge 6
// Create a function called reduce that takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.

function reduce(array, callback, initialValue) {
  let acc;
  if (Object.keys(argument).length > 2) {
    acc = initialValue;
  } else {
    // InitialValue not provided
    acc = array[0];
    array.shift();
  }

  forEach(array, (item) => {
    acc = callback(acc, item);
  });
  return acc;
}

// -----------------------!!!!!------------------------------------
function intersection(...arrays) {
  return arrays.reduce((acc, array) => {
    return array.filter((item) => acc.includes(item));
  });
}
