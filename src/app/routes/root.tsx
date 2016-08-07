import * as React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mpTheme } from "../components/mpTheme"


export interface RootState {
    useDarkTheme?: boolean
}

export default class Root extends React.Component<any, RootState>
{
    constructor(props: any, state: RootState) {
        super(props, state);

        this.state = {
            useDarkTheme: false
        }
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