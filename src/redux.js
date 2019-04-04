'use strict';

function buyAcorn (input) {
  return {
    type: 'ADD_ACORN',
    input
  };
};

function eatAcorn (input) {
  return {
    type: 'SUBTRACT_ACORN',
    input
  };
};

