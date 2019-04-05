'use strict';

import React from 'react';
import BuyAcorn from './containers/BuyAcorn/index';
import EatAcorn from './containers/EatAcorn/index';
import DisplayAcorn from './containers/DisplayAcorn/index';

const App = ({displayCount}) => (
  <main>
    <h1>Golden Acorn Application With Redux</h1>
    <BuyAcorn />
      <DisplayAcorn>
        <h2>{displayCount}</h2>
      </DisplayAcorn>
    <EatAcorn />
  </main>
);

export default App;