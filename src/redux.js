'use strict';

function buyAcorn (callBack) {
  return {
    type: 'ADD_ACORN',
    callBack
  };
};

function eatAcorn (callBack) {
  return {
    type: 'SUBTRACT_ACORN',
    callBack
  };
};

