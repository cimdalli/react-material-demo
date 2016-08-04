import * as React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from "./mpTheme"

export interface MainState {
    useDarkTheme: boolean;
}

export default class Main extends React.Component<any, MainState>{

    constructor(props: any, state: MainState) {
        super(props, state);
         var asd = this.context;
         debugger;

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
            <div style={{ textAlign: "center" }}>
                <MuiThemeProvider muiTheme= { muiTheme(this.state.useDarkTheme) } >
                    {this.props.children}
                </MuiThemeProvider >
            </div >
        );
    }
} 