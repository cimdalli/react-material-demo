import * as React from 'react'

import { ChangeTheme } from '../actions/layout.actions'
import { Logout } from '../actions/auth.actions'

import { TopBar, TopBarProps } from '../components/topBar'
import { mapStoreToProps } from '../utils/redux.helpers'
import { connect } from 'react-redux'
import { mapDispatchToProps } from 'redux-ts'

const storeProps = mapStoreToProps(store => ({
  useDarkTheme: !!store.layout.useDarkTheme,
}))

const dispatchProps = mapDispatchToProps({
  Logout,
  ChangeTheme,
})

type MainProps = ReturnType<typeof dispatchProps> &
  ReturnType<typeof storeProps>

const MainContainer: React.SFC<MainProps> = ({ children, ...rest }) => (
  <div>
    <TopBar {...rest} />
    {children}
  </div>
)

export const Main = connect(storeProps, dispatchProps)(MainContainer)
