import * as React from 'react';
import { IRouterContext, IRouter } from 'react-router'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from "./mpTheme"

export interface MainState {
    useDarkTheme: boolean;
}

export interface MainProps {
    onToggleTheme: Function
    children?: React.ReactElement<any>
}


export default class Main extends React.Component<MainProps, MainState>{

    constructor(props: MainProps, state: MainState) {
        super(props, state);
        
        this.state = {
            useDarkTheme: false
        }

        this.onToggleTheme = this.onToggleTheme.bind(this);
    }

    onToggleTheme() {
        this.setState({
            useDarkTheme: !this.state.useDarkTheme
        });
    }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <MuiThemeProvider muiTheme= { muiTheme(this.state.useDarkTheme) } >
                    {
                        this.props.children && React.cloneElement(this.props.children, {
                            onToggleTheme: this.onToggleTheme
                        }) }
                </MuiThemeProvider >
            </div >
        );
    }
}