// tenSquared
function tenSquared() {
  return 10 * 10;
}

tenSquared(); // 100

// What about a 9 squared function?

// nineSquared
function nineSquared() {
  return 9 * 9;
}
nineSquared();

// And an a 8 squared function? 125 squared?
// What principle are we breaking?
// DONT REPEAT YOURSELF

// We can generalize the function to make it reusable
function squareNum(num) {
  return num * num;
}
squareNum(10); // 100
squareNum(9); // 81
squareNum(8); // 64

// Generalizing functions
/* ‘Parameters’ (placeholders) mean we don’t need to decide what data to run our
functionality on until we run the function
- Then provide an actual value (‘argument’) when we run the function
Higher order functions follow this same principle.
- We may not want to decide exactly what some of our functionality is until we
run our function */
