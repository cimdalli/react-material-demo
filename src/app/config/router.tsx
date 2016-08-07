import * as React from 'react';
import { IRoute, Router, Route, Redirect, RouterState, browserHistory, hashHistory, EnterHook } from 'react-router'
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

const routes =
    <Route>
        <Redirect from="/" to="dashboard" />
        <Route component={Main} >
            <Route path="login" component={Login} />
            <Route component={AuthArea} onEnter={checkAuth}>
                <Route path="dashboard" component={Dashboard} />
            </Route>
        </Route>
    </Route>

export default () => {
    return (
        <Router history={hashHistory} routes={routes} />
    );
}