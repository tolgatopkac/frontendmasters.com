// Primitive Types: typeof

var v;
typeof v; // undefined

v = "1";
typeof v; // string

v = 2;
typeof v; // number

v = true;
typeof v; // boolean

v = {};
typeof v; //object

v = Symbol();
typeof v; //symbol

// arrays are subtypes of object.

typeof doesntExist; // "undefined"

var v = null;
typeof v; // "objcet" OOPS!

v = function () {};
typeof v; // "function"

v = [1, 2, 3];
typeof v; // "object"
