'use strict';

import ReduxApp from '../components/ReduxApp';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    displayCount: state.acorns.acornCount
  }
};

const AppWrapper = connect(
  mapStateToProps,
)(ReduxApp);

export default AppWrapper;