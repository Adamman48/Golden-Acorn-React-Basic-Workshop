'use strict';

import Display from '../../components/display';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    children: state.acornCount
  };
};

const DisplayAcorn = connect(
  mapStateToProps
)(Display);

export default DisplayAcorn;