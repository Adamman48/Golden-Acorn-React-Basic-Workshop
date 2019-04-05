'use strict';

import React from 'react';
import BuyAcorn from './containers/BuyAcorn/index';
import EatAcorn from './containers/EatAcorn/index';
import DisplayAcorn from './containers/DisplayAcorn/index';

const App = ({displayCount}) => (
  <main>
    <BuyAcorn />
      <DisplayAcorn>
        <h1>{displayCount}</h1>
      </DisplayAcorn>
    <EatAcorn />
  </main>
);

export default App;