import { createStore } from "redux";

// initial value
const initialValue = { value: 0 };

const INCREMENT = "counter/increment";
// alternative
const ADD = "ADD";

const incrementAction = { type: INCREMENT };

// ACTION CREATORS
const increment = () => ({ type: INCREMENT });
const add = (amount) => ({ type: ADD, payload: amount });

// REDUCER
const reducer = (state, action) => {
  if (action.type === INCREMENT) {
    const value = state.value + 1;
    return { value };
  }

  if (action.type === ADD) {
    return { value: state.value + action.payload };
  }
  return state;
};

// STORE
const store = createStore(reducer);
