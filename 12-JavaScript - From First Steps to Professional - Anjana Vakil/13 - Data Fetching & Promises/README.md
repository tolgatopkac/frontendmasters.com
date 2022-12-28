Data Fetching & Promises
-
### APIs & Fetch
- URLs point to resources on the web
- APIs provide URLs that point at data we care about
`fetch( )` let us use JS to load data from APIs
`fetch("https://dog.ceo/api/breed/hound/list")`

### Working with Promises
Promises are something that comes into play into JavaScript when we are doing things that take a long time, or looking for things that we are going to need some time to find.
![enter image description here](https://i.ibb.co/BrpSYrc/612.png)

Promises can be in 3 possible states : 
-- **pending** : still waiting for the value, hang tight
-- **fullfilled** : (aka "resolved") : finally got the value, all done.
-- **rejected** : sorry couldn't get the value, all done
It takes time for Promises to resolve, so they are "asynchronous"

JS adds the task to the TODO list and keeps running our program
But our program needs the data, we want JS to stop and wait for the Promise to resolve

**await**
`await` lets us tell JS to stop and wait for and asynchronous operation to finish.

### using Await with Promises
In the case of a Promise, it waits for it to resolve before continuing with our code
let response = await fetch("https://dog.ceo/api/breed/hound/list");
console.log(response);
The Promise we got from `fetch( )` resolves to a `Response` object

--- http.cat/200 ---

**response body**
It's `body` contains the data we care about. But we have to read the body somehow.

Calling the `.json( )` method on the response parses its body as a JSON object

`response.json( )`
But that gives us another PROMISE!



![enter image description here](https://i.ibb.co/JRTW343/612.png)
