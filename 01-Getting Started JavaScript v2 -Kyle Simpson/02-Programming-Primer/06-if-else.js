// Decisions

// assignment statement
var age = 39;

if (age >= 18) {
  goVote();
}

if (isEnrolled()) {
  takeClass();
} else {
  enrollFirst();
}

// TEST
var isEnrolled = true;

if (isEnrolled) {
  console.log("Take the class!");
} else {
  console.log("Enroll first");
}

// OUTPUT : "Take the class!"
