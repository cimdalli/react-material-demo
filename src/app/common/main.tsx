import * as React from 'react';
import { IRouterContext, IRouter } from 'react-router'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from "./mpTheme"

export interface MainState {
    useDarkTheme: boolean;
}


class Main extends React.Component<any, MainState>{

    constructor(props: any, state: MainState) {
        super(props, state);
        debugger;
        this.state = {
            useDarkTheme: false
        }

        this.toggleTheme = this.toggleTheme.bind(this);
    }

    // context: IRouterContext;
    // static contextTypes: React.ValidationMap<any> = {
    //     router: React.PropTypes.func.isRequired
    // }

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

export default Main;