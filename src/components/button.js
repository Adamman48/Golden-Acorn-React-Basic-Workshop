'use strict';

import React from 'react';

const Button = ({inputString, inputFunc}) => {
  return (
    <button onClick={inputFunc}>{inputString}</button>
  );
};

export default Button;