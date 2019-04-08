'use strict';

import React from 'react';
import BuyAcorn from './containers/BuyAcorn';
import EatAcorn from './containers/EatAcorn';
import DisplayAcorn from './containers/DisplayAcorn';
import KeyPress from './components/Keypress';
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