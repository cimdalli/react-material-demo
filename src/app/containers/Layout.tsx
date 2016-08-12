import * as React from 'react';
import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mpTheme } from "../components/mpTheme"

import { StoreState } from '../reducers'

interface LayoutProps {
    useDarkTheme: boolean;
}

function mapStateToProps(state: StoreState): LayoutProps {
    return {
        useDarkTheme: state.layout.useDarkTheme
    };
}

class Layout extends React.Component<LayoutProps, any>{

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <MuiThemeProvider muiTheme= { mpTheme(this.props.useDarkTheme) } >
                    {this.props.children}
                </MuiThemeProvider >
            </div >
        );
    }

}


export default connect(mapStateToProps)(Layout)