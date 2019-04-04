'use strict';

function buyAcorn (input) {
  return {
    type: 'ADD_ACORN',
    input  // callback which takes one parameter (state of acorns, later on) and adds one to it, then returns it
  };       // or....input is a number and passed on to the reducer, which will add as much to the current state of acorns as the input's value
};

function eatAcorn (input) {
  return {
    type: 'SUBTRACT_ACORN',
    input  // vice-versa
  };
};