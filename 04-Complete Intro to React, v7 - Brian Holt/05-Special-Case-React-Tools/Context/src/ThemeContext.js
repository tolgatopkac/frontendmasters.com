import { createContext } from "react";

// green is default value
// const [theme,setTheme] = useState("darkblue")

// const ThemeContext = createContext();

const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
