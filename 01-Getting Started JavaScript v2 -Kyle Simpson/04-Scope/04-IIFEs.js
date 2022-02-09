// IIFE = Immediately Invoked Function Expression
// Tanımlandığı an çağrılan/çalıştırılan fonksiyonlar

var teacher = "Kyle";

(function anotherTeacher() {
  var teacher = "Suzy";
  console.log(teacher); // Suzy
})();

console.log(teacher); // Kyle

// https://benalman.com/news/2010/11/immediately-invoked-function-expression/
