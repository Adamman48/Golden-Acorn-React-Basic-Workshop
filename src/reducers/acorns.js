'use strict';

const initialState = {
  acornCount: 0
};

const acorns = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ACORN':
      return Object.assign({}, state, {
        ...state,
        acornCount: state.acornCount + action.incrementBy
      });
    case 'SUBTRACT_ACORN':
      return Object.assign({}, state, {
        ...state,
        acornCount: state.acornCount - action.decrementBy
      });
    default:
      return state;
  };
};

export { acorns };