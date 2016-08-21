import * as React from 'react';

import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'

import { reducers, StoreState } from "../reducers"
import { StoreBuilder, typedToPlainMiddleware, asyncMiddleware } from 'redux-ts'

import routes from '../routes'


export default class RootContainer extends React.Component<any, any>{
    store: Redux.Store<StoreState>;
    history: HistoryModule.History;

    constructor() {
        super();
        
        this.store = new StoreBuilder()
            .withMiddleware(typedToPlainMiddleware)
            .withMiddleware(asyncMiddleware)
            .withMiddleware(routerMiddleware(hashHistory))
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