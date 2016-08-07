import * as React from 'react';
import { Router, Route, Redirect, RouterState, browserHistory, hashHistory, EnterHook } from 'react-router'
import Main from "../common/main"
import Login from "../public/login"
import Dashboard from "../secure/dashboard"
import AuthArea from "../area/auth"


const checkAuth: EnterHook = (nextState: RouterState, replace: any, callback?: Function) => {
    let isAuth = !!localStorage.getItem("auth");

    if (isAuth) {
        if (nextState.location.pathname == "/login") {
            replace("/dashboard");
        }
    }
    else {
        replace("/login");
    }
    callback();
}


export default () => {
    return (
        <Router history={hashHistory} >
            <Redirect from="/" to="dashboard" />
            <Route path="/" component={Main} >
                <Route path="login" component={Login} />
                <Route path="/" component={AuthArea} onEnter={checkAuth}>
                    <Route path="dashboard" component={Dashboard} />
                </Route>
            </Route>
        </Router>
    );
}