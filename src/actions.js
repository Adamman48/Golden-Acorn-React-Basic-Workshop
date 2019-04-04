'use strict';

function buyAcorn (incrementBy) {
  return {
    type: 'ADD_ACORN',
    value: incrementBy
  };       
};

function eatAcorn (decrementBy) {
  return {
    type: 'SUBTRACT_ACORN',
    value: decrementBy
  };
};

export { buyAcorn, eatAcorn };