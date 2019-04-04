'use strict';

import React from 'react';
import BuyAcorn from './containers/BuyAcorn';
import EatAcorn from './containers/EatAcorn';
import DisplayAcorn from './containers/DisplayAcorn';

const App = (props) => (
  <main>
    <BuyAcorn />
    <DisplayAcorn />
    <EatAcorn />
  </main>
);

export default App;