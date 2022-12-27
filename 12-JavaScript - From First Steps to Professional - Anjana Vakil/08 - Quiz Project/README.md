Quiz Project
-
### Functions, Parameters, & Arguments
Values are things 
Variables point to things
Functions do things

### Declaring (creating) a function

     function half(x) {
    	return x / 2;
    }
    	
### Calling ( using ) a function

    const one = half(2);

### Parameters & Arguments 
Some functions need more than one value to work

    function add(x, y) {
    	return x + y;
    }
    add(2,3);

### Some functions don't even need any values 

    function getRandomNumber( ) {
    		return Math.random();
    }
    getRandomNumber();  // Random number 0 - 1

### parameters are the inputs a function expects arguments are the actual values the function is called with

    function add3(x,y,z) {
    	console.log("My parameters are named x,y,z");
    	console.log("I received the arguments", x, y, z);
    	return x + y + z;
    	}
    const sum = add3(4, 5, 6)

### Parameters should be named like variables, and behave like variables within the function body

    function doesThisWork("literally a value") {
    	return true;
    }

    function howAboutThis(1weirdVariable!) {
    return true;
    }

### What happens if we don't call a function with the intended argument(s) ? 

    add3(1,2)
    // -"undefined" -NaN
    getRandomNumber("unexpected")
    // JS don't care. 
    // Go ahead and do its job.
    // ex -> 0.7777


## Function Return Values
A return statement specifies the function's output value

    function square(x) {
    	return  x * x;
    };
    
    const nine = square(3);
## Arrow Functions
The `=>`  "fat arrow" lets us create an unnamed function without much code
	`(x,y) => x + y`
Since arrow functions are expressions, we can assign them to a variable
`const add = (x, y) => x + y`
is equivalent to 

    function add(x, y) {
       return x + y; 
    }
❗ **usually in arrow functions is just one expression.**

Arrow functions are great when we just want to return a value

    function square(x) {
    	return x * x;
    }
	
`const square = (x) => x*x;`
`x => x * x `
`(x) => x  * x`
`(firstName, lastName) => firstName + " " + lastName`

    const addAndLog = (x, y) => {
    	let sum = x + y;
    	console.log("The sum is", sum);
    	return sum;
    } 


## Scope
**In JS it doesn't just matter what variables we declare**
It also matters where we declare them
**❗Scope determines where variables are "in play"** 

    function declareBankruptcy( ) {
    	let bankruptcy = true;
    }
    declareBankruptcy();
    console.log(bankruptcy);
    // bankruptcy is not defined
     
Scopes are nested within the program
The widest scope is the **global scope** 
Each function gets its own new scope within the scope where it was declared
![enter image description here](https://i.ibb.co/xGg3BPG/5125.png)

![enter image description here](https://i.ibb.co/XSfWtQJ/5125.png)
## let & Scope
 ❗  Variables declared with `let` can be modified from within a narrower scope.
 This can be useful, but also dangerous.
 ![enter image description here](https://i.ibb.co/7QJTxmR/5125.png)

