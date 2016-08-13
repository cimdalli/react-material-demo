import * as React from 'react';
import { Route } from 'react-router'

import { authChecker, goToPath } from './utils/routeHelpers'

import Layout from './containers/Layout'
import Login from './containers/Login'
import Main from './containers/Main'
import Dashboard from './containers/Dashboard'


export default
    <Route component={Layout} onChange={authChecker('login', 'dashboard', 'auth')} >
        <Route path="login" component={Login} />
        <Route component={Main} >
            <Route path="dashboard" component={Dashboard} />
        </Route>
        <Route onEnter={goToPath('dashboard')} path="*"/>
    </Route>
