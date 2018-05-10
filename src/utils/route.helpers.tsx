import * as React from 'react'
import { Route, Redirect, RouteProps } from 'react-router'
import { connect } from './redux.helpers'

interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean
}

class PrivateRouteContainer extends React.Component<PrivateRouteProps> {
  render() {
    const { isAuthenticated, component: Component, ...rest } = this.props
    console.log({ isAuthenticated })

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

export const PrivateRoute = connect(state => ({
  isAuthenticated: !!state.auth.token,
}))(PrivateRouteContainer)
