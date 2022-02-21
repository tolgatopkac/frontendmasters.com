// implicit != Magic
// implicit != Bad

// implicit : Abstracted

// Not all abstractions are good, but some abstractions are necessary.

// But within functional programming, you use abstraction all over the place. And it turns out that the declarative style of coding is actually more implicit.

// hiding unnecessary details, re-focusing the reader and increasing clarity

// EXAMPLE

var numStudents = 16;

console.log(`There are ${String(numStudents)} students`);
// "There are 16 students."

var numStudents = 16;

console.log(`There are ${numStudents} students`);
//  "There are 16 students."

//Example - 2
var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshop2Elem.value;

if (Number(workshopEnrollment1) < Number(workshopEnrollment2)) {
  //...
}

if (workshopEnrollment1 < workshopEnrollment2) {
}

// implicit can be good (sometimes)
