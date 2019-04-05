'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
/* import GoldenAcornApp from './components/GoldenAcornApp'; */
import AppWrapper from './containers/AppWrapper';
import acornStorage from './store';

ReactDOM.render(
  <Provider store={acornStorage}>
    <AppWrapper />
  </Provider>, 
  document.getElementById('root')
);

/* ReactDOM.render(
  <GoldenAcornApp />, document.getElementById('root')
); */