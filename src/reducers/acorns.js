'use strict';

const initialState = {
  acornCount: 0,
  buy: 'Buy one',
  eat: 'Eat one'
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