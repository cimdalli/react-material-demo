import * as React from 'react';
import { IRouterContext } from 'react-router'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mpTheme } from "../components/mpTheme"


class ContextAwareComponent<P, S, C> extends React.Component<P, S>{
    context: C;
}

export interface RootState {
    useDarkTheme?: boolean
}

export interface RootContext {
    handleToggleTheme: Function
    router: IRouterContext
}

export default class Root extends React.Component<any, RootState>
{
    constructor(props: any, context: RootContext) {
        super(props, context);

        this.state = {
            useDarkTheme: false
        }

        this.handleToggleTheme = this.handleToggleTheme.bind(this);
    }

    // static contextTypes: RootContext;

    handleToggleTheme() {
        this.setState({
            useDarkTheme: !this.state.useDarkTheme
        });
    }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <MuiThemeProvider muiTheme= { mpTheme(this.state.useDarkTheme) } >
                    {
                        this.props.children && React.cloneElement(this.props.children, {
                            onToggleTheme: this.handleToggleTheme
                        })
                    }
                </MuiThemeProvider >
            </div >
        );
    }

}