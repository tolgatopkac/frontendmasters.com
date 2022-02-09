// FOR LOOP
var students = [
  /* ... */
];

for (let i = 0; i < students.length; i++) {
  greetStudent(students[i]);
}

for (let student of students) {
  greetStudent(student);
}

// While LOOP
var students = [
  /*  */
];

while (students.length > 0) {
  let student = students.pop();
  greetStudent(student);
}

/* Example */

var students = ["Mat", "Sarah", "Susan"];

while (students.length > 0) {
  let student = students.pop();
  console.log(`Hello, ${student}!`);
}

/* OUTPUT :
Hello, Susan!
Hello, Sarah!
Hello, Mat!
*/
