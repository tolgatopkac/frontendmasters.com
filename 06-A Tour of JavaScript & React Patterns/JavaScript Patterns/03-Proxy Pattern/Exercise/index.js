import { isValidEmail, isAllLetters } from "./validator.js";

/* 
Add the following validation to the user object:

The username property has to be a string that only contains of letters, and is at least 3 characters long
The email property has to be a valid email address.
The age property has to be a number, and has to be at least 18
When a property is retrieved, change the output to ${new Date()} | The value of ${property}} is ${target[property]}. For example if we get user.name, it needs to log 2022-05-31T15:29:15.303Z | The value of name is John

*/

const user = {
  firstName: "John",
  lastName: "Doe",
  username: "johndoe",
  age: 42,
  email: "john@doe.com",
};

const userProxy = new Proxy(user, {
  get: (target, prop) =>
    console.log(
      `${new Date()} | The value of ${prop} is ${Reflect.get(target, prop)}`
    ),

  set: (target, prop, value) => {
    if (prop === "username") {
      if (!isAllLetters(value)) {
        throw new Error("You can only use letters in your username.");
      }

      // The username property has to be a string that only contains of letters, and is at least 3 characters long
      if (value.length < 3) {
        throw new Error("Please provide a valid username");
      }
    }

    // The email property has to be a valid email address.
    if (prop === "email") {
      if (!isValidEmail(value)) {
        throw new Error("Please provide a valid email");
      }
    }

    // The age property has to be a number, and has to be at least 18
    if (prop === "age") {
      if (typeof value !== "number") {
        throw new Error("Please provide a valid age.");
      }

      if (value < 18) {
        throw new Error("You have to be at least 18 years old.");
      }
    }

    console.log("Successfully updated!");
    return Reflect.set(target, prop, value);
  },
});

userProxy.age = 4;
