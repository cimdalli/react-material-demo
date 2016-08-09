import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import * as injectTapEventPlugin from 'react-tap-event-plugin';

import store from "./store/config"
import Router from "./routes/router"


// import * as todos from "./todos" 
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('app'));

// todos.test();