# Expressions

[MDN JavaScript > JS Guide > Expressions & Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

an expression evaluates ( aka resolves ) to a value

---

###  Declaring & Assingning Variables
**Variables**

- Variables let us **remember** values
		- `let remember = "Sept. 21"`
		
- **Declaring** a variable
		-	`let bankruptcy;`

❗ **Note**  
`let bankruptcy = null `
`bankruptcy`
	-	null

**Assigning a variable**
`let myDeclaredVariable;`
`myDeclaredVariable = "so value, much wow"`

**Declaring & assigning at once**
`let myAssignedVariable = "such efficient, amaze"`

-----
### const & Accessing Variables

**Declaring & assigning forever** 
	-	`const` declares & assigns a "constant" aka a variable that can't be changed

`const myUnchangeableVariable = "Never gonna give you up"`

--- 
### Statements vs Expressions
- An expression "asks" JS for a value
`myAssignedVariable` 
` 6 + 4 `
`document.getElementById("board");`

- A statement "tells" JS to do something
		- ( e.g. declare / assing a variable )
`let ten = 6  + 4; `
`myDeclaredVariable = "new value" `
`let board = document.getElementById("board")`