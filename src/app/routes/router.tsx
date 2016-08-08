import * as React from 'react';
import { Router, Route, Redirect, RouterState, hashHistory, ChangeHook, EnterHook } from 'react-router'

import Root from "./root"
import Login from "./public/login/login"
import Main from "./secure/main/main"
import Dashboard from "./secure/dashboard/dashboard"


const checkAuth: ChangeHook = (prevState: RouterState, nextState: RouterState, replace: any, callback?: Function) => {
    let isAuth = !!localStorage.getItem("auth");

    if (isAuth) {
        if (nextState.location.pathname == "/login") {
            replace("/dashboard");
        }
    }
    else if (nextState.location.pathname != "/login") {
        replace("/login");
    }
    callback();
}

const goToDashboard: EnterHook = (nextState: RouterState, replace: any, callback?: Function) => {
    replace("/dashboard");
    callback();
}

//HMR workaround
const routes =
    <Route component={Root} onChange={checkAuth} >
        <Route path="login" component={Login} />
        <Route component={Main} >
            <Route path="dashboard" component={Dashboard} />
        </Route>
        <Route onEnter={goToDashboard} path="*"/>
    </Route>

export default () => {
    return (
        <Router history={hashHistory} routes={routes} />
    );
}