import React from 'react';
import Accounts from '../Accounts';
import Blocks from '../Blocks';
import Transactions from '../Transactions';
import Contracts from '../Contracts';
import Events from '../Events';
import Logs from '../Logs';
import Help from '../Help';
import Settings from '../Settings';

import Header from './Header';

function Dashboard(props) {
  let DashboardContent = <Accounts />;
  if (props.currentTab === 'accounts') {
    DashboardContent = <Accounts />;
  } else if (props.currentTab === 'blocks') {
    DashboardContent = <Blocks />;
  } else if (props.currentTab === 'transactions') {
    DashboardContent = <Transactions />;
  } else if (props.currentTab === 'contracts') {
    DashboardContent = <Contracts />;
  } else if (props.currentTab === 'events') {
    DashboardContent = <Events />;
  } else if (props.currentTab === 'logs') {
    DashboardContent = <Logs />;
  } else if (props.currentTab === 'help') {
    DashboardContent = <Help />;
  } else if (props.currentTab === 'settings') {
    DashboardContent = <Settings />;
  }
  return (
    <main className="container-dashboard">
      <Header />
      {DashboardContent}
    </main>
  );
}

export default Dashboard;
