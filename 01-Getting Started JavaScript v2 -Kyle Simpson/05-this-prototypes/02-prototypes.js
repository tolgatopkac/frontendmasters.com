// It's almost like you can't understand prototypes without understanding the this keyword.And vice versa, you can't understand the this keyword without understanding prototypes.Or at least you can't understand why the this keyword is so powerful without understanding prototypes.

// prototype means that it is an object where any instances are going to be linked to or to delegate to.

function WorkShop(teacher) {
  this.teacher = teacher;
}

WorkShop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

var deepJS = new WorkShop("Kyle");
var reactJS = new WorkShop("Suzy");

deepJS.ask("Is 'prototype' a class ? ");
//Kyle Is 'prototype' a class ?

reactJS.ask("Isn't 'prototype' ugly?");

// !! prototype: as 'classes'
