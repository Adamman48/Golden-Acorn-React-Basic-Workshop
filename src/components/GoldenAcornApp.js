'use strict';

import React from 'react';
import Button from './button';
import Display from './display';
const { Component } = require ('react');

class GoldenAcornApp extends Component {

  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.buyOne = this.buyOne.bind(this);
    this.eatOne = this.eatOne.bind(this);
    this.keyBindingCounter = this.keyBindingCounter.bind(this);
  };

  buyOne () {
    this.setState(previousState => {
      return {counter: previousState.counter + 1};
    });
  };

  eatOne () {
    this.state.counter > 0 ?
      this.setState(previousState => {
        return {counter: previousState.counter - 1};
      }) :
    null;
  };

  keyBindingCounter (event) {
    event.keyCode === 38 ? 
        this.buyOne() : 
      event.keyCode === 40 ? 
        this.eatOne() : 
      null
  };

  componentDidMount () {
    window.addEventListener('keydown', this.keyBindingCounter);
  };

  componentWillUnmount () {
    window.removeEventListener('keydown', this.keyBindingCounter);
  };

  render() {
    return (
      <div>
      <h1>Golden Acorn Application With States</h1>
      <Button inputString={'Buy one'} inputFunc={this.buyOne}/>
      <Display>
        <h2>{this.state.counter} &#x1f330;</h2>
      </Display>
      <Button inputString={'Eat one'} inputFunc={this.eatOne}/>
      </div>
    );
  };
};

export default GoldenAcornApp;