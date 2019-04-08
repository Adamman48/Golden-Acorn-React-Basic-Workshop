'use strict';

import React from 'react';
import acornStorage from '../store';
import { buyAcorn, eatAcorn }from '../actions/actions'; 

class KeyPress extends React.Component {
  constructor(props) {
    super(props)
    this.keyBindingCounter = this.keyBindingCounter.bind(this);
  };

  keyBindingCounter (event) {
    event.keyCode === 38 ? 
        acornStorage.dispatch(buyAcorn(1)) : 
      event.keyCode === 40 ? 
        acornStorage.dispatch(eatAcorn(1)) : 
      null;
  };

  componentDidMount () {
    window.addEventListener('keydown', this.keyBindingCounter);
  };

  componentWillUnmount () {
    window.removeEventListener('keydown', this.keyBindingCounter);
  };

  render () {
    return (
      null
    );
  };
};

export default KeyPress;
