import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

//  data flows from the parent
//  React has been meant to be maintainable over being easy to write
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cocktaiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mix",
    }),
  ]);
};

render(React.createElement(App, null, {}), document.getElementById("root"));
