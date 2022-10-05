import {createStore} from "redux";

const intialState = {value:0};

//  Only requirement ist that there is a type.
const incrementAction = {type: "INCREMENT",payload:5};

const reducer = (state,action)=>{
  return state;
}

// It's pretty flexible with what it takes. There's only one real requirement that it takes a reducer.
const store = createStore(reducer);

console.log(store)

/* 
{dispatch: ƒ dispatch(), subscribe: ƒ subscribe(), getState: ƒ getState(), replaceReducer: ƒ replaceReducer()}
dispatch: ƒ dispatch() {}
subscribe: ƒ subscribe() {}
getState: ƒ getState() {}
replaceReducer: ƒ replaceReducer() {}
*/