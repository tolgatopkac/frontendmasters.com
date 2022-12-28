# setTimeout
 Usually, our JS code does things that are very quick
 `console.log("This will print in a New York minute")`
 `console.log("This will print one New York minute later")`
 So JS can usually run straight through our program **"synchronously"**

But when we need to do something that takes a long time  we still want the web browser to keep working.

JS can only do one task at a time ("single-threaded")
--> For example " JS says: I cannot text you with a drink in my hand"

So when we give JS a task that takes a while, it doesn't stop and wait
`console.log("This will print first");`
`setTimeOut( ( ) => console.log("This will print third"), 1000);`
`console.log( "This will print second")` 
it adds the slow task to a "TODO list" and keeps on running our program
The task runs some time later, "asynchronously"


**Some things that take time** 
- Waiting for user events
- Asking a user to pick a file 
- Getting permission to access the camera/mic
- Loading data from the interwebs
[MDN: Introducing Asynchronous JS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
[Philip Roberts](https://www.youtube.com/watch?v=8aGhZQkoFbQ)