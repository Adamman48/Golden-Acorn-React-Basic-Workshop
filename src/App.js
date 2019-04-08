'use strict';

import React from 'react';
import BuyAcorn from './containers/BuyAcorn/index';
import EatAcorn from './containers/EatAcorn/index';
import DisplayAcorn from './containers/DisplayAcorn/index';
import KeyPress from './components/keypress';
/* import Display from './components/display'; // could use this instead DisplayAcorn, does the same thing */

const App = ({displayCount}) => (
  <main>
    <h1>Golden Acorn Application With Redux</h1>
    <BuyAcorn />
      <DisplayAcorn>
        <h2>{displayCount} &#x1f330;</h2>
      </DisplayAcorn>
    <EatAcorn />
    <KeyPress />
  </main>
);

export default App;