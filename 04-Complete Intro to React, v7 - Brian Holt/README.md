# 01-Vanilla-React

- props : data flows from the parent
- React has been meant to be maintainable over being easy to write
- React is all about making components. And then taking those components and making more components out of those.
- There are two types of components, function components and class components.
- Props are variables that a parent passes to its children


# 02-JS Tools

**npm**
npm does not stand for Node.js Package Manager. It is, however, the package manager for Node.js.

**Prettier**

    > npm i -D prettier

npx : npx is a tool that will install something and then run it immediately. You can use it to test something.

npm install -D > install to devDependencies

**ESLint**

    npx eslint .\src\App.js

prettier vs eslint : prettier doesn't take care of any does not look at the code it doesn't make any assertion that it's correct right it just says like I'm making this space to uniformly. Es linters saying things more like I don't want you to use this API.If you're using this thing incorrectly, you declared a variable that you never used, like it's introspection your code from that direction

**Parcel**

    npm i -d parcel

Parcel is a bundler. Parcel because it is just the easiest tool to set up.
Parcel : "this is a TypeScript file. Therefore, I'm gonna use TypeScript to compile it. This is a CSS file, therefore I'm gonna use PostCSS to run it through, right? "

- **Bundlers Overview**
- **Component Module**
- **Browserslist**


# 03-Core React Concepts

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

### Custom Hooks
### Handling User Input
- This is most useful when you need to be reactive to your data changing or when you're setting up or tearing down a component. Sometimes you just need to respond to someone pressing a button.
- [React Events](https://reactjs.org/docs/events.html#supported-events)
### Component Composition
-In general I find two reasons to break a component into smaller components: reusability and organization. When you want to use the same component in multiple places (e.g. a button, a tooltip, etc.) then it's helpful to have one component to maintain, test, use, etc

### Styling the Pet Component 
- React is typically fast enough that you'll never have any performance problems with it. That's the general rule of thumb. That's the way you should just file it in your brain is like, just write readable code.

### Building for Production

    npx parcel build src/index.html
    npx serve dist

- React already has a lot of developer conveniences built into it out of the box. What's better is that they automatically strip it out when you compile your code for production.

### Strict Mode

-  if you put your app into a StrictMode, it will add additional checks that basically help you future-proof your application. So they'll put things that don't allow you to do things that would not be compatible with, like the future React batching mode and the future suspense rendering and things like that.

### React DevTools


# 04-React Capabilities

### React Router
[React Router](https://reactrouter.com/)

- The killer feature of React Router is that it's really accessible. It manages things like focus so you don't have to.
- Where possible you use browser router. It's better for SEO, it makes more sense to users, the URLs are better. 
- Use browser router where possible though, for consumer facing applications.
- code organization always, especially for long-lived applications, always ends up messy. So embracing that fact and kind of leading into it instead of trying to dogmatically apply rules that'll never work. Make it searchable and make it believable. If something's deletable, that's how you know you've done wel

### Class Components
- Class : You don't typically use them on the day to day, most people don't write JavaScript in a object oriented kinda way please don't.
- you can't use hooks with class components. So you stay use a factor, use params or anything that uses use, you cannot use with a class component. 

  

      class ComponentName extends Component {
    	constructor(props) {
    		super(props);
    		
    		}
    	}
    
- the props is taking in the props of whatever the parent component is passing down to the child's component
- Super props means give this to my parent component so not parent component but parent class the parent class of details is component. Basically what you're saying is you have to give the props to React.

-  Every class component extends  `React.Component`. Every class component must have a render method that returns some sort of JSX / markup / call to  `React.createElement`.
- If you have a constructor, you _have_ to do the `super(props)` to make sure that the props are passed up to React so React can keep track of them.

#### Fetching Data in componentDidMount
- ComponentDidMount  : this function gets run after it gets rendered to the DOM for the very first time. it's gonna run this once.
- `componentDidMount` is a function that's called after the first rendering is completed. This pretty similar to a `useEffect` call that only calls the first time. This is typically where you want to do data fetching.
- Notice instead of getting props via parameters and state via `useState` we're getting it from the instance variables `this.state` and `this.props`. This is how it works with class components. Neither one will you mutate directly.

    async  componentDidMount()  {}
    useEffect(()  =>  {},[])

- class components are way less important than they used to be.

#### Class Properties
-  **Babel** is, it's a code transformer, it takes code A, it applies some transformation and you get code B out the other side.

####  Managing State in Class Components
####  Handle Events in Class Components


# 05-Special Case React Tools
