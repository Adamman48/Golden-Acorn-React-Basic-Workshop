'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import GoldenAcornApp from './components/GoldenAcornApp';
import AppWrapper from './containers/AppWrapper';
import acornStorage from './store';
import NavBar from './components/navbar';
import Home from './components/home';

ReactDOM.render(
  <BrowserRouter>
    <div>
    <Provider store={acornStorage}>
    <NavBar />
      <Switch>
        <Route exct path='/' component={Home}></Route>
        <Route path='/simple/redux' component={AppWrapper} />
        <Route path='/simple/states' component={GoldenAcornApp} />
      </Switch>
    </Provider>
    </div>
  </BrowserRouter>, 
  document.getElementById('root')
);