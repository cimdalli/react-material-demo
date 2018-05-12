import * as React from 'react'
import { Route, Redirect, RouteProps } from 'react-router'
import { connect } from 'react-redux'
import { mapStoreToProps } from './redux.helpers'

const storeProps = mapStoreToProps(store => ({
  isAuthenticated: !!store.auth.token,
}))

type PrivateRouteProps = RouteProps & ReturnType<typeof storeProps>

class PrivateRouteContainer extends React.Component<PrivateRouteProps> {
  render() {
    const { isAuthenticated, component: Component, ...rest } = this.props

    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated && Component ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        }
      />
    )
  }
}

export const PrivateRoute = connect(storeProps)(PrivateRouteContainer)
