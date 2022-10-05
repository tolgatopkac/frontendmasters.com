import { createStore } from "redux";

const initialState = { value: 0 };

const INCREMENT = "counter/increment";
const ADD = "ADD";

const incrementAction = { type: INCREMENT };

// ACTION CREATORS

const increment = () => ({ type: INCREMENT });
const add = (amount) => ({ type: ADD, payload: amount });

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    const value = state.value + 1;
    return { value };
  }

  if (action.type === ADD) {
    return { value: state.value + action.payload };
  }
  return state;
};

const store = createStore(reducer);

store.dispatch(increment());

console.log(store.getState());
