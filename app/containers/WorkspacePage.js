import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Workspace from '../components/Workspace';
import {
  sidebarToggleAction,
  handleTabChangeAction
} from '../actions/Workspace/sidebar';

class WorkspacePage extends Component {
  render() {
    return (
      <Workspace
        sidebarToggleAction={this.props.sidebarToggleAction}
        sidebarToggleState={this.props.sidebarToggleState}
        handleTabChangeAction={this.props.handleTabChangeAction}
        currentTab={this.props.currentTab}
      />
    );
  }
}
// WorkspacePage.propTypes = {
//   sidebarToggleAction: PropTypes.func,
//   sidebarToggleState: PropTypes.bool
// };
const mapDispatchToProps = dispatch => ({
  sidebarToggleAction: payload => dispatch(sidebarToggleAction(payload)),
  handleTabChangeAction: payload => dispatch(handleTabChangeAction(payload))
});
const mapStateToProps = state => ({
  sidebarToggleState: state.sidebarToggleState,
  currentTab: state.currentTab
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkspacePage);
