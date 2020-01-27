export function sidebarToggleState(initialState = true, action) {
  switch (action.type) {
    case 'SIDEBAR_TOGGLE':
      return action.payload;
    default:
      return initialState;
  }
}

export function currentTab(initialState = 'accounts', action) {
  switch (action.type) {
    case 'TAB_CHANGE':
      return action.payload;
    default:
      return initialState;
  }
}
