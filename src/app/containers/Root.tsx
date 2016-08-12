import * as React from 'react';

import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'

import thunk from 'redux-thunk';

import { reducers, StoreState } from "../reducers"
import { StoreBuilder } from "../utils/storeBuilder"
import { authChecker, goToPath } from '../utils/routeHelpers'
import { typedToPlainMiddleware } from '../utils/actionHelpers'

import Layout from './Layout'
import Login from './Login'
import Main from './Main'
import Dashboard from './Dashboard'


export default class Root extends React.Component<any, any>{
    store: Redux.Store<StoreState>;
    history: HistoryModule.History;

    constructor() {
        super();

        this.store = new StoreBuilder()
            .withMiddleware(typedToPlainMiddleware)
            .withMiddleware(routerMiddleware(hashHistory))
            .withMiddleware(thunk)
            .withReducer("routing", routerReducer)
            .withReducersMap(reducers)
            .build<StoreState>();

        this.history = syncHistoryWithStore(hashHistory, this.store);
    }

    routes =
    <Route component={Layout} onChange={authChecker('login', 'dashboard', 'auth') } >
        <Route path="login" component={Login} />
        <Route component={Main} >
            <Route path="dashboard" component={Dashboard} />
        </Route>
        <Route onEnter={goToPath('dashboard') } path="*"/>
    </Route>

    render() {

        return (
            <Provider store={ this.store }>
                <Router history={ this.history }>
                    {this.routes}
                </Router>
            </Provider>
        );
    }
} 