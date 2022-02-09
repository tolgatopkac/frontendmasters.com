// Named Function Expressions

// --- anonymous function expressions
var clickHandler = function () {
  //...
};

// --- named function expressions
var keyHandler = function keyHandler() {
  //..
};

// NOTE

// you will more likely have seen more of anonymous function expressions in the code that you've written and that others have written. But I'm gonna make the case that you really should have all named function expressions, if possible.

// Şimdiye kadar, yazdığınız ve başkalarının yazdığı kodda daha fazla anonim işlev ifadesi görmüş olacaksınız. Ama mümkünse, gerçekten tüm adlandırılmış işlev ifadelerine sahip olmanız gerektiğini söyleyeceğim.

// EXAMPLES of function expressions

var ids = people.map((person) => person.id);

var ids = people.map(function getId(person) {
  return person.id;
});

getPerson()
  .then((person) => getData(person.id))
  .then(renderData);

getPerson()
  .then(function getDataFrom(person) {
    return getData(person.id);
  })
  .then(renderData);
