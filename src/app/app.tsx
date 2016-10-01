import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as injectTapEventPlugin from 'react-tap-event-plugin';
import 'ts-helpers'

import Root from './containers/Root'


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(<Root />, document.getElementById('app'));
