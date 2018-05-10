import * as React from 'react'

import { ChangeTheme } from '../actions/layout.actions'
import { Logout } from '../actions/auth.actions'
import { push } from 'react-router-redux'

import { TopBar, TopBarProps } from '../components/topBar'
import { connect } from '../utils/redux.helpers'

const MainContainer: React.SFC<TopBarProps> = ({ children, ...rest }) => (
  <div>
    <TopBar {...rest} />
    {children}
  </div>
)

export const Main = connect(
  store => ({
    useDarkTheme: !!store.layout.useDarkTheme,
  }),
  dispatch => ({
    logout: () => dispatch(new Logout()),
    toggleTheme: () => dispatch(new ChangeTheme()),
  }),
)(MainContainer)
