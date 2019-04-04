'use strict';

/* import { connect } from 'react-redux'; */

const mapStateToProps = (state) => {
  return {
    displayCount: state.acorns.acornCount
  };
};