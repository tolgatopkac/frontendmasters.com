import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode, useState } from "react";
import ThemeContext from "./ThemeContext";
import Details from "./Details";

const App = () => {
  // Make here default color
  const theme = useState("green");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/">Adapt Me!</Link>
          </header>

          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
