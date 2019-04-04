'use strict';

const initialState = {
  acorns: 0,
};

const acorns = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ACORN':
      return Object.assign({}, state, {
        ...state,
        acorns: action.input(state.acorns) 
      });
    case 'SUBTRACT_ACORN':
      return Object.assign({}, state, {
        ...state,
        acorns: action.input(state.acorns)
      });
    default:
      return state;
  };
};

export { acorns };