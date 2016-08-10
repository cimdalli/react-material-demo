import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'

import rootReducer from "./reducers/root"

import * as injectTapEventPlugin from 'react-tap-event-plugin';

import { StoreBuilder } from "./store/builder"
import routes from "./routes/routes"


// import * as todos from "./todos" 
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = new StoreBuilder()
    .withMiddleware(routerMiddleware(hashHistory))
    .withReducer("routing", routerReducer)
    .withReducer("root", rootReducer)
    // .withInitialState({
    //     root: {
    //         useDarkTheme: false
    //     }
    // })
    .build();

const history = syncHistoryWithStore(hashHistory, store);


ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            { routes }
        </Router>
    </Provider>
    , document.getElementById('app'));

// todos.test();