# Events & Handlers
Codepen [Exercise](https://codepen.io/tolgatopkac/pen/poZgjgJ)
The web browser fires events when certain things happen on the page
For example, when the user clicks somewhere on the page, a `click` event is fired.

We can detect events with JS using an event listener
The `.addEventListener( )` method lets us listen for events on a DOM element

    document.addEventListener("click", () => {
    	console.log("clicked")
    })

❗ `.addEventListener( ) ` takes 2 parameters : 
- The name of the event to listen to (e.g. `click`)
- A handler function that JS calls when that event is fired on this element

### Event Object
JS passes an `event` object to the handler function with information about the event 
If we accept this as a parameter, we can use it to get details

    document.addEventListener("click",(event) => {
    	console.log(event);
    }
**event.target**
`event.target` is the element the event fired on 
(in this case, which element was clicked)

    document.addEventListener("click", (event) => {
    	console.log(event.target);
    });


[EVENT REFERENCE -MDN](https://developer.mozilla.org/en-US/docs/Web/Events)

### Event Exercise

**Click**
    trueButton.addEventListener("click", (event) => {
    	trueButton.textContent = trueButton.textContent.toUpperCase();
    	});
**MouseHover**

    let h1 = document.getElementsByTagName("h1")
    h1 = h1[0];
    h1.addEventListener("mouseover", () =>{
	    h1.textContent = "hovering"
	})
    h1.addEventListener("mouseout", () => {
	   h1.textContent = "Quiz.js";
	})
    
