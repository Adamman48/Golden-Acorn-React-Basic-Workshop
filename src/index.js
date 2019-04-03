'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({inputString, inputFunc}) => {

  const element = (
    <div>
      <button onClick={inputFunc}>{inputString}</button>
    </div>
  );

  return element; 
};

const Display = ({inputNum}) => {
  const element = (
    <div>
      <h1>{inputNum}</h1>
    </div>
  );

  return element;
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

  render() {
    return (
      <div>
      <Button inputString={'Buy one'} inputFunc={this.buyOne}/>
      <Display inputNum={this.state.counter}/>
      <Button inputString={'Eat one'} inputFunc={this.eatOne}/>
      </div>
    );
  }
};
 
ReactDOM.render(
  <GoldenAcornApp />, document.getElementById('root')
);