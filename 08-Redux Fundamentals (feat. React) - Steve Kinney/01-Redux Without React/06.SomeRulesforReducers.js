// Some Rules for Reducers
// - No mutating objects. If you touch it, you replace it
// - You have to return something and ideally, it should be the unchanged state if there is nothing you need to do it.
// It's just a JavaScript function
// MULTIPLE STORE = ANTI PATTERN

// NESTED OBJECT

const angryBlogPost = {
  title: "A letter to the editor",
  content: "I am very salty about...",
  author: {
    firstName: "Steve",
    lastName: "Kinney",
    location: {
      city: "Denver",
    },
  },
};

// what if I want to just update the location

// PREFER FLAT OBJECTS
if (action.type === "CITY_CHANGED") {
  return {
    state,
    author: {
      ...state.author,
      location: {
        /* !!!! */
        city: action.payload,
      },
    },
  };
}
