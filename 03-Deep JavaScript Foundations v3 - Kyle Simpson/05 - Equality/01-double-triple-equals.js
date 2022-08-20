// https://262.ecma-international.org/9.0/#sec-strict-equality-comparison
/* 
checks value (loose) 

checks value and type (strict)
*/

// if you're trying to understand your code, it's critical you learn to think like JS

// EXAMPLE

var studentName1 = "Frank";
var studentName2 = `${studentName1}`;

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshopEnrollment1 + 0;

studentName1 == studentName2; // true
studentName1 === studentName2; // true

workshopEnrollment1 == workshopEnrollment2; // true
workshopEnrollment1 === workshopEnrollment2; // true

// Essentially the real difference between strict equality and loose equality is whether or not we're going to to allow any coercion to occur.

var workshop1 = { name: "Deep JS Foundation" };
var workshop2 = { name: "Deep JS Foundation" };

if (workshop1 == workshop2) {
  // Nope
}
if (workshop1 === workshop2) {
  // Nope
}

// neither == nor === is gonna return a true because they are different objects.

/* 
== allows coercion (types different)

=== disallows coercion (types same)

*/
