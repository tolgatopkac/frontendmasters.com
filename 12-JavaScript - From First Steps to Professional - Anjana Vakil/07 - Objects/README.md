# Objects

## Objects & Propert Access
 Objects collect multiple values together to describe more complex data
 Similar to how we can point at different values using variables in our code, objects let us point at related values using properties in the object.

![enter image description here](https://i.ibb.co/pdn0g6t/5214.png)

#### Getting property values  ( Dot Notation )
 `js.name` --> "JavaScript"
 `js.isAwesome` --> true
 
 #### Using property values 
 `js.names.startsWith("Java")`
 `let age = 2022 - js.birthYear;`
 
 #### Setting property values 
 `const indecisive = {
	 lunch: "sandwich"
};`

`indecisive.lunch = "tacos"` 
`indecisive.snack= "chips"` 

## Objects Methods
Properties can point to functions too 
We call function-properties "method" on objects
![enter image description here](https://i.ibb.co/0V37x1R/ex.png)


#### This
- This in a method lets us reference other properties on the object

![enter image description here](https://i.ibb.co/cxwmC3J/ex.png)

#### Nested Objects
![enter image description here](https://i.ibb.co/jTz1BQb/ex.png)

#### Objects in Arrays & Objects
![enter image description here](https://i.ibb.co/dfkz7BH/ex.png)

#### Built in objects
`console.warn("...")`
`console.error("...")`

**Math**
`let randomNumber = Math.random( );`
`const pi  = Math.PI; `
`const five = Math.abs(-5)`

