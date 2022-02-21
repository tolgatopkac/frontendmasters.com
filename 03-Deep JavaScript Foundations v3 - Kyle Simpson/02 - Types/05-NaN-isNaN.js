// NaN ("not a number")

var myAge = Number("0o46"); // 38
var myNextAge = Number("39"); // 39
var myCatsAge = Number("n/a"); //NaN
myAge - "my son's age"; //NaN

myCatsAge === myCatsAge; //false
// NaN === NaN //false

isNaN(myAge); //false
isNaN(myCatsAge); //true
isNaN("my son's age"); //true

// NaN : Invalid Number
// NaN ifadesini döndürmen gereken yerde NaN veya Invalid Number döndür. Bu dönüş
// undefined - null - false - (-1) veya 0 olmamalı.

// it is a number, and it is the invalid number, and it is going to occur in your programs, not maybe, it will, and you should be testing for it appropriately. Otherwise, you have bugs and you're not handling those bugs.
