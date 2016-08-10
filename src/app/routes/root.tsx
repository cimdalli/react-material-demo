import * as React from 'react';
import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mpTheme } from "../components/mpTheme"


interface RootProps {
    useDarkTheme: boolean;
}

function mapStateToProps(state: any) {
    return {
        useDarkTheme: state.root.useDarkTheme
    };
}

class Root extends React.Component<RootProps, any>
{
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

export default connect(mapStateToProps)(Root)