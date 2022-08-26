# 05-Special Case React Tools

### Error Boundaries

- An error boundary basically says, containing the blast zone of a component to this component. So basically, you're gonna wrap untrusted components with an error boundary so that your errors can't bubble outside of that.
- Function components are not capable of being error boundaries. So this is one specific case where you absolutely must use a class component.


### Context

- Context is like state, but instead of being confined to a component, it's global to your application.
- Context (mostly) replaces Redux. Well, typically. It fills the same need as Redux. I really can't see why you would need to use both. Use one or the other.

- `import { createContext } from "react";`
- `const ThemeContext = createContext(["green", () => {}]);`

- `createContext` is a function that returns an **object** with two **React components** in it: a **Provider** and a **Consumer**.
- A context will only be available inside of the **Provider**.

- A Consumer is how you consume from the above provider. A Consumer accepts a function as a child and gives it the context which you can use. We won't be using the Consumer directly: a function called `useContext` will do that for us.

- "The other thing I'm gonna say about context is, it basically for 95% of the reasons we used to use Redux for. Context is now a better choice, I almost never use Redux anymore."


# Portals-useRef for Modals