// reducer is going to import those action types

import { DECREMENT, INCREMENT, SET } from './actions';

export const initialState = { count: 400 };

export const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { count: state.count + 1 };
  }

  if (action.type === DECREMENT) {
    return { count: state.count - 1 };
  }

  if (action.type === SET) {
    return { count: parseInt(action.payload, 10) };
  }

  return state;
};
