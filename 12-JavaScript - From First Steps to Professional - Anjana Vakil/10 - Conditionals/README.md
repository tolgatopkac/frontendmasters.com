# Conditionals
- `if`statements let us execute code under a certain *condition* 
- code in the `if` block only runs if the `(condition)` is true
- we can use `else` to run other if `(condition)` is false
- we can chain `else` an `if` blocks to account for multiple conditions
- The `condition` is usually an expression that evaluates to a boolean
- If it's given some other value, JS will convert it to a boolean and decide based its "truthiness"
- Is an empty `[]` array truthy or falsy ? `Truthy` ❗ Objects are truthy and arrays are objects.
- Empty string is `Falsy` `("")`
---

    if ( 0 ) {
    	console.log("zero is truthy");
    } else {
    	console.log("zero is falsy")
    }

### Logical & Ternary Operator
Boolean (logical) operators 
Sometimes we care about the opposite of a value 

    let someoneIsAroundYou = false;
    if (!someoneIsAroundYou) {
    	console.log("baby I love you")
    }

The `!` operator negates a boolean (gives its opposite)

Sometimes we care about the truhiness of more than one value

    if (you.happy && you.knowIt) {
    	you.clapHands() ;
    }

### Conditional Ternary Operator
JS also has a "shortcut" operator for writing quick conditionals it needs 3 values to work:
`condition ? valueIfTrue : valueIfFalse`

`let mood = forecast === "sunny" ? "happy" : "sad";`
is equivalent to

    let mood;
    if(forecast === "sunny") {
    	mood = "happy";
    } else {
    	mood = "sad";
    }


### Loops
Loops let us run the same chunk of code multiple times

    for ( let rep = 0; rep < 10; rep +=1 ) {
    	console.log("now doing rep", rep);
    }
    console.log("do you even lift bro")

`for ... of ` loops let us more easily iterate over items in a collection

`const numbers = [1,2,3];`

    for ( let i = 0; i < numbers.length; i++ ) {
    	console.log(numbers[i]);
    };

    for (let n of numbers) {
    	console.log(n);
    }

### [For ... of MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

We can use `for ... of ` to iterate over characters in a string

    for ( let char of "ALOHA" ) {
    	console.log(char);
    }

or items in an array

    for (let item of ["pop", 6 "squish"]) {
	    console.log(typeof item);
    }

because strings & arrays are "iterables"