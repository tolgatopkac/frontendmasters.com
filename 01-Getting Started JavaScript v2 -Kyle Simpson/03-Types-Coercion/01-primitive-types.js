/* 
---THREE PİLLARS OF JavaScript
1 ) Types / Coercion 
2 ) Scope / Closures
3 ) this / Prototypes

*/

/* 
TYPES / COERCIONS
1 ) Primitive Types
2 ) Converting Types
3 ) Checking Equality 
*/

// ----------------------------------------------------------------
// PRIMITIVE TYPES
// "In JavaScript, everything is an object" Bu bilgi yanlış !
// JavaScript'de her şeyin nesne olduğu bilgisi doğru değildir!

/* 
undefined
string
number
boolean
object
symbol


null?
function?
array?

*/

// NOT : IN JavaScript, variables don't have types, values do

var v;
typeof v; // undefined

v = "1";
typeof v; //string

v = 2;
typeof v; //number

v = true;
typeof v; //boolean

v = {};
typeof v; //object

v = [];
typeof v; // object

v = Symbol();
typeof v; //Symbol

// ----------------------------------------------------------------

typeof doesntExist; //"undefined"

var v = null;
typeof v; // "object"

v = function () {}; // "function"
typeof v;

v = [1, 2, 3]; // "object"
typeof v;
