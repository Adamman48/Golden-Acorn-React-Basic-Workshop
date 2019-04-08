'use strict';

const initialState = {
  acornCount: 0,
  buy: 'Buy one',
  eat: 'Eat one',
  ID: 0
};

const acorns = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ACORN':
      return Object.assign({}, state, {
        acornCount: state.acornCount + action.incrementBy,
        ID: state.ID + 1
      });
    case 'SUBTRACT_ACORN':
      return Object.assign({}, state, {
        acornCount: Math.max(initialState.acornCount, 0),
        ID: state.ID + 1
      });
    default:
      return state;
  };
};

export default acorns;