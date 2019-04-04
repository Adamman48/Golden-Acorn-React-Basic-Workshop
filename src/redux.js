'use strict';

function buyAcorn (input) {
  return {
    type: 'ADD_ACORN',
    input  // callback which takes one parameter (state of acorns, later on) and adds one to it, then returns it
  };
};

function eatAcorn (input) {
  return {
    type: 'SUBTRACT_ACORN',
    input  // vice-versa
  };
};