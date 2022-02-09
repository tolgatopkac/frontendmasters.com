// this / Prototypes

// -- this
// -- Prototypes
// -- class {}

// THIS

// A function's this references the execution context for that call, determined entirely by how the function was called

// this: dynamic context
// A this-aware function can thus have a different context each time it's called, which makes it more flexible & reusable

var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

workshop.ask("What is implicit binding?");

function ask(question) {
  console.log(this.teacher, question);
}

function otherClass() {
  var myContext = {
    teacher: "Suzy",
  };
  ask.call(myContext, "Why?");
}
