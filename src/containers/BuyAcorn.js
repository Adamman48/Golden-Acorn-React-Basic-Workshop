'use strict';

import Button from '../components/Button';
import { buyAcorn } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    inputString: state.acorns.buy
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputFunc: () => {dispatch(buyAcorn(1))}
  };
};

const BuyAcorn = connect (
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default BuyAcorn;