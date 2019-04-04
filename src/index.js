'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import GoldenAcornApp from './components/GoldenAcornApp';
/* import App from './App';
import AcornStorage from './store';

ReactDOM.render(
  <Provider store={AcornStorage}>
    <App />
  </Provider>, 
  document.getElementById('root')
); */

ReactDOM.render(
  <GoldenAcornApp />, document.getElementById('root')
);