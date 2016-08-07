import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import Router from "./config/router"

// import * as todos from "./todos" 
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// const router = <Router />; 

ReactDOM.render(<Router />, document.getElementById('app'));

// todos.test();