# Destructuring Data

### Destructuring Data & Arrays
Destructuring is a fancy way of declaring multiple variables at once 
By "extracting" values from an object with their property names

    `const spices = [ 
    	{ 
    		name: "Emma",
    		nickname: "Baby"
    	}
    ]
    
    let { name, nickname } = spices[0];
    name  -> // "Emma" 
    nickname -> // "Baby"
    ---
    let {nickname} = spice[0]
    nickname -> // "Baby"
    

---    	
We can also destructure Arrays, assigning variables for their items

`const [ baby, ginger, scary, sporty, posh] = spices; `

`let {title} = document`

-> title
-> "New Tab"

-> We can use . . . collect values 
`const [babySpice, . . .adultSpices] = spices; `
