'use strict';

import React from 'react';
import BuyAcorn from './containers/BuyAcorn/index';
import EatAcorn from './containers/EatAcorn/index';
import DisplayAcorn from './containers/DisplayAcorn/index';

const App = (props) => (
  <main>
    <BuyAcorn />
    <DisplayAcorn>
      <h1>{DisplayAcorn}</h1>
    <DisplayAcorn/>
    <EatAcorn />
  </main>
);

export default App;