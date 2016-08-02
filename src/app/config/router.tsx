import * as React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import Layout from "./common/layout"
import Login from "./public/login"
import Dashboard from "./secure/dashboard"


export default () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Dashboard} />
                <Route path="login" component={Login}/>
                <Route path="dashboard" component={Dashboard}/>
            </Route>
        </Router>
    );
}
