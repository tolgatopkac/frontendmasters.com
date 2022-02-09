// bir türden diğerine dönüştürmenin yolu : coercion

var msg1 = "There are ";
var numStudents = 16;

var msg2 = " students.";

console.log(msg1 + numStudents + msg2);

// Output :
// There are 16 students.

var numStudents = 16;
console.log(`There are ${numStudents + ""} students.`);

// There are 16 students.

// NOTE
/* 
Number + Number = Number
Number  + String = String
String + Number = String
String + String = String

*/
