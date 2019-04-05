'use strict';

import App from '../App';
import { connect } from 'react-redux';
import { buyAcorn } from '../actions';
import { eatAcorn } from '../actions';
import acornStorage from '../store';

const keyBinding = () => {
window.addEventListener('keydown', event => {
  event.keyCode === 38 ? //switch didn't work, why?
      acornStorage.dispatch(buyAcorn(1)) :
  event.keyCode === 40 ?
      acornStorage.dispatch(eatAcorn(1)) :
  null
})};

const mapStateToProps = (state) => {
  return {
    displayCount: state.acorns.acornCount
  }
};

const AppWrapper = connect(
  mapStateToProps,
  keyBinding
)(App);

export default AppWrapper;