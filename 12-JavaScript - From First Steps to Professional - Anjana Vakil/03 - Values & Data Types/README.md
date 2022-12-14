# Values & Data Types

### Values 
`typeof` --> tells you the type of a value

- strings
- numbers

❗ JS has two kinds of data : 
- Primitive types (e.g. strings, numbers)
- Objects (e.g. `document` & friends)

**Primitive data types** 
- string
- number
- boolean
- undefined
- null
-...

### Undefined vs Null
![enter image description here](https://i.ibb.co/mcBd0fY/2.png)


---
### Index
Characters are in a specific order 
Each gets a number, starting at 0
aka an "index"

- What's the first character in the string ? 
		- `"ALOHA"[0]`  ( A )
		- `"ALOHA"[2]` ( O )

- What's the index of a specific character ?   ( **indexOf** )
		- `"ALOHA".indexOf("L")`   --> 1
		- `"ALOHA".indexOf("A")`   --> 0
		- `"ALOHA".indexOf("Q")`   --> `-1`

- Does this string contain some other string ? **( includes )**
		- `"ALOHA".includes("HA")`   --> True
		- `"ALOHA".includes("LOL")` --> False

- Does this string start with some other string ? **( startsWith )**
		- `"ALOHA".startsWith("AL")` --> True
		- `"ALOHA".startsWith("HA")` --> False
- At what index does this substring begin ?
		- `"ALOHA".indexOf("HA")` --> 3 
		- `"ALOHA".indexOf("LOL")` --> -1
- Connecting strings together
		- `"ALOHA" + "!"`   --> "ALOHA!"

- `"ALOHA".toLowerCase( )` --> "aloha"