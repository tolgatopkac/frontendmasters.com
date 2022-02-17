function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();

// https://drive.google.com/file/d/1egTQVJkqe4T9H9W-Gk9u80KpDjemkso6/view?usp=sharing

// https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8

// https://nostarch.com/hemingway

// Persistent - lexical - static - scope - referance - data = back pack > Closure
