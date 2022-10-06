// REdux itself is just objects and functions

import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
} from "redux";

const initalState = {
  users: [
    { id: 1, name: "Steve" },
    { id: 2, name: "Eric" },
  ],
  tasks: [
    { title: "File the TPS reports" },
    { title: "Order more energy drinks" },
  ],
};

const ADD_USER = "ADD_USER";
const ADD_TASK = "ADD_TASK";

const addTask = (title) => ({ type: ADD_TASK, payload: title });
const addUser = (name) => ({ type: ADD_USER, payload: name });
/* 
const reducer = (state = initialState, action) => {
  if (action.type === ADD_USER) {
    return {
      ...state,
      user: [...state.users, action.payload],
    };
  }

  if (action.type === ADD_TASK) {
    return {
      ...state,
      tasks: [...state.tasks, action.payload],
    };
  }
};

const store = createStore(reducer, initialState);
 */

// --------------- REFACTOR - REDUCE ------

// user reducer
const userReducer = (users = initialState.users, action) => {
  if (action.type === ADD_USER) {
    return [...users, action.payload];
  }
};

// taks reducer
const taskReducer = (tasks = initialState.tasks, action) => {
  if (action.type === ADD_TASK) {
    return [...tasks, action.payload];
  }
};

const reducer = combineReducers({ users: userReducer, tasks: taskReducer });

const store = createStore(reducer);

console.log(store.getState());
