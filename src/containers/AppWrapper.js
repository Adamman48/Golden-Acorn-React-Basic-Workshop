'use strict';

import App from '../App';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    displayCount: state.acorns.acornCount
  }
};

const AppWrapper = connect(
  mapStateToProps,
)(App);

export default AppWrapper;