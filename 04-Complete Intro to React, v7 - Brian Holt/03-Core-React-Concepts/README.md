# Core React Concepts

 ### JSX
 - The one component does one thing and does it really well. And then we'll make lots of components and will compose components of other components. That's the React method that's the React way of thinking. So you're going to find that we're going to put the view which is the HTML.

### Search Form Component
-  Hooks are for adding statefulness to UI.

### useState Hook - Mapping Data to Component
- a hook is that they always start with use.
-  **Do not put hooks inside of if statements or loops, that's hard rule, literally never, it's never appropriate.** If you do, you'll have insane bugs that involve `useState` returning _the wrong state_.
-  `useState`  returns to us an array with two things in it: the current value of that state and a function to update that state. We're using a feature of JavaScript called destructuring to get both of those things out of the array.

### Effects 
- You state and use effect 99% of what you need react hooks for everything else is a pretty specialized use case.
- `useEffect` allows you to say "do a render of this component first so the user can see _something_ then as soon as the render is done, _then_ do something (the something here being an effect.)
- the `[]` at the end of the useEffect is where you declare your data dependencies. React wants to know _when_ to run that effect again. You don't give it data dependencies, it assumes any time any hook changes that you should run the effect again.