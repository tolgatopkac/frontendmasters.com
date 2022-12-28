# Modules
[**JS Modules**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
Modules let us split big codebases across multiple files

    <script type = "module">
    	// . . .
    </script>

JS modules work differently from JS scripts
❗ One difference is that we can't use `await` outside of a function in a script

    <script>
    	await fetch("https://. . .");
    </script>

 ### Modules scope 
 ❗  **Another difference is that modules create their own scope**
 
 ### import && export
 `export` lets us expose variables from our module's scope to the outside world

    / / myModule.js
    const veryUsefulFunction = ( ) => " I came from a module";
    export { veryUsefulFunction } ; 

`import` lets us use an exposed variable from another module

    / /  otherModule.js
    import { veryUsefulFunction } from "./myModule.js"
    
    veryUsefulFunction( );
    
### Debugging

**Browser Debugger**
![enter image description here](https://i.ibb.co/CBCvyRW/612.png)

**try catch Error Handling**
[Try. . . catch MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
![enter image description here](https://i.ibb.co/jLcr3sm/512.png)

