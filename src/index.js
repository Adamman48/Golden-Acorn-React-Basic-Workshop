'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import GoldenAcornApp from './components/GoldenAcornApp';
import AppWrapper from './containers/AppWrapper';
import acornStorage from './store';
import NavBar from './components/navbar';
import Home from './components/home';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={acornStorage}>
      <NavBar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/simple/redux' component={AppWrapper} />
          <Route path='/simple/states' component={GoldenAcornApp} />
        </Switch>
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root')
);