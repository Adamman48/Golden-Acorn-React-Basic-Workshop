'use strict';

import Display from '../../components/display';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    amount: state.acorns.acornCount
  };
};

const DisplayAcorn = connect(
  mapStateToProps
)(Display);

export default DisplayAcorn;