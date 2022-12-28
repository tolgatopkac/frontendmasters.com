# Map & Filter

`map` calls a function on each item in an array to create a new array

![enter image description here](https://i.ibb.co/NskBPsB/1245.png)

String templates are useful too! Make them with backticks and `${ }` e.g
`string to insert ${variable} into`

    s => `${s.nickname}` Spice`;

is equivalent to 

    s => s.nickname + " Spice"
`filter` calls a true/false function on each item and creates a new array with only the items where the function returns true

    const mels = spices.filter(s => s.name.includes("Mel"));

## Spread ( . . . )
Is another neat trick for iterating over arrays 
It lets us take all the items in an array and spread 'em around

We can use it to put all the items from one array inside another array 

    const oldBurns = ["square", "wack"]
    const newBurns = ["basic", "dusty", "sus"];
    const burnBook = [...oldBurns, ...newBurns];

**equivalent to** 

`const burnBook = oldBurns.concat(newBurns);`

We can also use it to pass all the items from an array as arguments to function or method

    const skills = ["HTML", "CSS", "JS"];
    const newSkills = ["React", "TypeScript", "Node"];
    skills.push(...newSkills);
    console.log(...skills);
