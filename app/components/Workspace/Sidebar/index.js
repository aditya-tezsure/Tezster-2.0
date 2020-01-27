/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Sidebar(props) {
  return (
    <aside className="container-sidebar">
      <ul className="sidebar-content-container">
        <li
          className={
            props.currentTab === 'accounts'
              ? 'sidebar-content-active'
              : 'sidebar-content'
          }
          onClick={() => props.handleTabChangeAction('accounts')}
        >
          <span className="accounts-icon" />
          <span
            className={
              props.sidebarToggleState
                ? 'sidebar-text'
                : 'sidebar-text-collapsed'
            }
          >
            {' '}
            Accounts
          </span>
        </li>
        <li
          className={
            props.currentTab === 'blocks'
              ? 'sidebar-content-active'
              : 'sidebar-content'
          }
          onClick={() => props.handleTabChangeAction('blocks')}
        >
          <span className="blocks-icon" />
          <span
            className={
              props.sidebarToggleState
                ? 'sidebar-text'
                : 'sidebar-text-collapsed'
            }
          >
            {' '}
            Blocks
          </span>
        </li>
        <li
          className={
            props.currentTab === 'transactions'
              ? 'sidebar-content-active'
              : 'sidebar-content'
          }
          onClick={() => props.handleTabChangeAction('transactions')}
        >
          <span className="wallet-icon" />
          <span
            className={
              props.sidebarToggleState
                ? 'sidebar-text'
                : 'sidebar-text-collapsed'
            }
          >
            {' '}
            Transactions
          </span>
        </li>
        <li
          className={
            props.currentTab === 'contracts'
              ? 'sidebar-content-active'
              : 'sidebar-content'
          }
          onClick={() => props.handleTabChangeAction('contracts')}
        >
          <span className="card-icon" />
          <span
            className={
              props.sidebarToggleState
                ? 'sidebar-text'
                : 'sidebar-text-collapsed'
            }
          >
            {' '}
            Contracts
          </span>
        </li>
        <li
          className={
            props.currentTab === 'events'
              ? 'sidebar-content-active'
              : 'sidebar-content'
          }
          onClick={() => props.handleTabChangeAction('events')}
        >
          <span className="events-icon" />
          <span
            className={
              props.sidebarToggleState
                ? 'sidebar-text'
                : 'sidebar-text-collapsed'
            }
          >
            {' '}
            Events
          </span>
        </li>
        <li
          className={
            props.currentTab === 'logs'
              ? 'sidebar-content-active'
              : 'sidebar-content'
          }
          onClick={() => props.handleTabChangeAction('logs')}
        >
          <span className="fill-icon" />
          <span
            className={
              props.sidebarToggleState
                ? 'sidebar-text'
                : 'sidebar-text-collapsed'
            }
          >
            {' '}
            Logs
          </span>
        </li>
        <li
          className={
            props.currentTab === 'help'
              ? 'sidebar-content-active'
              : 'sidebar-content'
          }
          onClick={() => props.handleTabChangeAction('help')}
        >
          <span className="email-icon" />
          <span
            className={
              props.sidebarToggleState
                ? 'sidebar-text'
                : 'sidebar-text-collapsed'
            }
          >
            {' '}
            Help Desk
          </span>
        </li>
        <li
          className={
            props.currentTab === 'settings'
              ? 'sidebar-content-active'
              : 'sidebar-content'
          }
          onClick={() => props.handleTabChangeAction('settings')}
        >
          <span className="settings-icon" />
          <span
            className={
              props.sidebarToggleState
                ? 'sidebar-text'
                : 'sidebar-text-collapsed'
            }
          >
            {' '}
            Settings
          </span>
        </li>
      </ul>
    </aside>
  );
}
Sidebar.protoTypes = {
  sidebarToggleState: PropTypes.bool
};

export default Sidebar;
