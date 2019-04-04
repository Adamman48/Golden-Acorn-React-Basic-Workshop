'use strict';

function buyAcorn (inputValue) {
  return {
    type: 'ADD_ACORN',
    incrementBy: inputValue
  };       
};

function eatAcorn (inputValue) {
  return {
    type: 'SUBTRACT_ACORN',
    decrementBy: inputValue
  };
};

export { buyAcorn, eatAcorn };