import * as React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from "./mpTheme"



export default class Layout extends React.Component<any, any>{

    constructor(props: any, state: any) {
        super(props, state);

        this.state = {
            useDarkTheme: false
        }

        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme() {
        this.setState({
            useDarkTheme: !this.state.useDarkTheme
        });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme= { muiTheme(this.state.useDarkTheme) } >
                {this.props.children}
            </MuiThemeProvider >
        );
    }
} 