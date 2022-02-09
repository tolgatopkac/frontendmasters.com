// Closure : Closure is when a function remembers the variables outside of it, even if you pass that function elsewhere. And there's two parts to this definition that are key for you to pick up. Number one, that it is remembering that a function is remembering variables outside of it.

// Closure : bir fonksiyonu başka bir yere aktarılsa bile, bir fonksiyonun dışındaki değişkenleri hatırlaması.

// example

function ask(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 100);
}

ask("What is closure?");

// https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures
