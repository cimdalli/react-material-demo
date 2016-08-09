import * as React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mpTheme } from "../components/mpTheme"


interface RootState {
    useDarkTheme?: boolean
}

export default class Root extends React.Component<any, RootState>
{
    constructor() {
        super();

        this.state = {
            useDarkTheme: false
        }

        this.handleToggleTheme = this.handleToggleTheme.bind(this);
    }

    handleToggleTheme() {
        this.setState({
            useDarkTheme: !this.state.useDarkTheme
        });
    }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <MuiThemeProvider muiTheme= { mpTheme(this.state.useDarkTheme) } >
                    {this.props.children}
                </MuiThemeProvider >
            </div >
        );
    }

}