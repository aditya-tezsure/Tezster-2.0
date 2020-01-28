import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Workspace from '../components/Workspace';
import {
  sidebarToggleAction,
  handleAccordionAction,
  handleTabChangeAction
} from '../actions/Workspace/sidebar';

class WorkspacePage extends Component {
  render() {
    return <Workspace {...this.props} />;
  }
}
// WorkspacePage.propTypes = {
//   sidebarToggleAction: PropTypes.func,
//   sidebarToggleState: PropTypes.bool
// };
const mapDispatchToProps = dispatch => ({
  sidebarToggleAction: payload => dispatch(sidebarToggleAction(payload)),
  handleTabChangeAction: payload => dispatch(handleTabChangeAction(payload)),
  handleAccordionAction: payload => dispatch(handleAccordionAction(payload))
});
const mapStateToProps = state => ({
  sidebarToggleState: state.sidebarToggleState,
  blockAccordionIndex: state.blockAccordionIndex,
  currentTab: state.currentTab
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkspacePage);
