'use strict';

const initialState = {
  acorns: 0,
};

const acorns = (state = initialState, action) => {
  typeof state === undefined ?
    initialState :
  null
};

export { acorns };