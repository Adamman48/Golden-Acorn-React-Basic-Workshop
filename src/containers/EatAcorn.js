'use strict';

import Button from '../components/Button';
import { eatAcorn } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    inputString: state.acorns.eat
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputFunc: () => {dispatch(eatAcorn(1))}
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default EatAcorn;