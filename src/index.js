'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({inputString, inputFunc}) => {
  return (
    <div>
      <button onClick={inputFunc} onKeyDown={inputFunc}>{inputString}</button>
    </div>);
};

const Display = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

class GoldenAcornApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.buyOne = this.buyOne.bind(this);
    this.eatOne = this.eatOne.bind(this);
  };

  buyOne () {
    this.setState(previousState => {
      return {counter: previousState.counter + 1};
    });
  };

  eatOne () {
    this.state.counter > 0 ?
      this.setState({
        counter: this.state.counter - 1
      }) :
    null;
  };

  componentDidMount () {
    window.addEventListener('keydown', (event) => 
      {event.keyCode === 38 ? 
        this.buyOne() : 
      event.keyCode === 40 ? 
        this.eatOne() : 
      null});
  };

  render() {
    return (
      <div>
      <Button inputString={'Buy one'} inputFunc={this.buyOne}/>
      <Display>
        <h1>{this.state.counter}</h1>
      </Display>
      <Button inputString={'Eat one'} inputFunc={this.eatOne}/>
      </div>
    );
  };
};
 
ReactDOM.render(
  <GoldenAcornApp />, document.getElementById('root')
);