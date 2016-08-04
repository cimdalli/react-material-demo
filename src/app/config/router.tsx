import * as React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory, browserHistory  } from 'react-router'
import Main from ".././common/main"
import Login from ".././public/login"
import Dashboard from ".././secure/dashboard"
import AuthArea from ".././area/auth"

// let onLoginEnter = () => {

// }


export default () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute  component={Login}/>
                <Route component={AuthArea}>
                    <Route path="dashboard" component={Dashboard}/>
                </Route>
            </Route>
        </Router>
    );
}