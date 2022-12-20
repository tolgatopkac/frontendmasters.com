# Arrays
[MDN Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Arrays
Arrays let us keep multiple values together in a single collection

`let synonyms = ["plethora", "array", "cornucopia"] `

- Like strings, arrays have a `length`
	- `synonyms.length`

- And each value has an index
	- `synonyms[1]`
	- `synonyms.indexOf("A")`
	
- Also like strings, we can check if an array **contains** a certain value
	-	`synonyms.includes("plethora")`  --> `true` 
	-	`synonyms.includes("D")` --> `false`               g
- Unlike string, we can **modify** arrays 
`synonyms[1] = "B"`
		-  `["plethora", "B", "cornucopia"] `

- `let lastItem = synonyms.pop()`
	-	lastItem = `cornucopia`
	-	`synonyms` -> `["plethora", "B",] `

- `synonyms.push("multitude")`
	-	`["plethora", "B","multitude" ] `

- Arrays can be empty, or hold a single item
	- `let emptyArray = [ ]`
	- `let oneItemArray = ["lonely"]`
- Arrays can hold any type of items, or mix and match!
	- `let mixedArray = ["pop", 6, "squish", false, document ]`
## Useful Array Methods
- Arrays can do lots of useful tricks ! 
### Sort 
`["c", "a", "d", "b"].sort( )`
--> `["a", "b", "c", "d"]` 
### Join
`["lions", "tigers", "bears oh my!",].join(" & ")`
--> "lions & tigers & bears oh my !"
`let names = ["Anjana", "Vakil"]`
`names[0] + "  " + names[1]`
"Anjana Vakil "
`names.join(" ")`
"Anjana Vakil "
### Concat
`[1, 2, 3].concat([4, 5, 6])`
--> `[1,2,3,4,5,6]`

## Mutability
### mutable vs. immutable
"Mutable" data can be edited (e.g Arrays)
"Immutable" data always stays the same (e.g. strings & other primitives)

## Mutability & Immutable Data Exercise
![enter image description here](https://i.ibb.co/JRVTPx0/ex.png)
❗ numbers2 unchanged -> `[1, 2, 3]` 

Note ❗❗ 
Some actions " mutate "an array  (e.g `oldArray.push(newValue)`)
aka change the array in-place

Other actions do not mutate the original array, but instead create a new copy (e.g `oldArray.concat(otherArray)` )



## Immutable Variables & Values
**Using immutable data & variables is usually best**
❗Use const
## Variables & Arrays
 ❗Use const