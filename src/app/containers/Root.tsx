import * as React from 'react';

import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'

import thunk from 'redux-thunk';

import { reducers, StoreState } from "../reducers"
import { StoreBuilder } from "../utils/storeBuilder"
import { typedToPlainMiddleware } from '../utils/actionHelpers'

import routes from '../routes'


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

    render() {
        return (
            <Provider store={ this.store }>
                <Router history={ this.history } routes={ routes } />
            </Provider>
        );
    }
} 