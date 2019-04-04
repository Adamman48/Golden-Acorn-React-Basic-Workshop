'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
/* import GoldenAcornApp from './components/GoldenAcornApp'; */
import App from './App';
import acornStorage from './store';

ReactDOM.render(
  <Provider store={acornStorage}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

/* ReactDOM.render(
  <GoldenAcornApp />, document.getElementById('root')
); */