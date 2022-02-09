//  Scope : where the JavaScript engine looks for things. and the things that it's looking for are these variables these identifiers

// Scope JavaScript motorunun bir şeyleri aradığı yer anlamına gelir

var x = 42;
// x'i tanımladığımda X'in nerede bulacağımı bilmem gerekiyor.
console.log(y);
// y değişkeni nerede tanımlı ? bu soruya cevap verecek olan scope kuralları

// ----------------------------------------------------------------

var teacher = "Kyle";

function otherClass() {
  teacher = "Suzy";
  topic = "React";
  console.log("Welcome");
}

otherClass(); //Welcome

teacher; // Kyle

topic; //undefined
