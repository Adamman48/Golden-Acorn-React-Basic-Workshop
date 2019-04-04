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
        acornCount: state.acornCount + action.value
      });
    case 'SUBTRACT_ACORN':
      return Object.assign({}, state, {
        acornCount: state.acornCount - action.value
      });
    default:
      return state;
  };
};

export default acorns;