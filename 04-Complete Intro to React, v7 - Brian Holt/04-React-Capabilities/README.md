# React Capabilities

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
