'use strict';

function buyAcorn (incrementBy) {
  return {
    type: 'ADD_ACORN',
    incrementBy  // input is a number and passed on to the reducer, which will add as much to the current state of acorns as the input's value
  };       
};

function eatAcorn (decrementBy) {
  return {
    type: 'SUBTRACT_ACORN',
    decrementBy  // vice-versa
  };
};

export default { buyAcorn, eatAcorn };