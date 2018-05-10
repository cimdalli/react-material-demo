import * as React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router'
import {
  routerMiddleware,
  routerReducer,
  ConnectedRouter,
} from 'react-router-redux'
import { StoreBuilder } from 'redux-ts'
import createHistory from 'history/createBrowserHistory'

import { auth } from '../reducers/auth.reducer'
import { layout } from '../reducers/layout.reducer'
import { StoreState } from '../models/store.model'
import Layout from './Layout'
import Login from './Login'
import { Main } from './Main'
import { PrivateRoute } from '../utils/route.helpers'
import Dashboard from './Dashboard'

const history = createHistory()
const routerMw = routerMiddleware(history)
const store = new StoreBuilder<StoreState>()
  .withDevTools()
  .withMiddleware(routerMw)
  .withReducer('router', routerReducer)
  .withReducerBuildersMap({ auth, layout })
  .build()

export default () => (
  <Provider store={store}>
    <Layout>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Main>
            <PrivateRoute path="/" component={Dashboard} />
          </Main>
        </Switch>
      </ConnectedRouter>
    </Layout>
  </Provider>
)
