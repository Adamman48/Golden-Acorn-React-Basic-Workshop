'use strict';

import React from 'react';
import BuyAcorn from './containers/BuyAcorn/index';
import EatAcorn from './containers/EatAcorn/index';
import DisplayAcorn from './containers/DisplayAcorn/index';

const App = (props) => (
  <div>
    <BuyAcorn />
      <DisplayAcorn>
        <h1>{console.log(props)}</h1>
      </DisplayAcorn>
    <EatAcorn />
  </div>
);

export default App;