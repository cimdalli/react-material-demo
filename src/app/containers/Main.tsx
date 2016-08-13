import * as React from 'react';

import { connect } from 'react-redux'
import { Dispatch } from "redux";
import { StoreState } from '../reducers'
import { ChangeTheme } from '../actions'
import { push } from 'react-router-redux'

import { TopBar } from '../components/topBar'

interface MainProps {
    dispatch: Dispatch<any>;
    useDarkTheme: boolean;
}

function mapStateToProps(state: StoreState) {
    return {
        useDarkTheme: state.layout.useDarkTheme
    };
}

class Main extends React.Component<MainProps, any> {

    constructor() {
        super();

        this.toggleTheme = this.toggleTheme.bind(this);
        this.logout = this.logout.bind(this);
    }


    logout() {
        localStorage.removeItem("auth");
        this.props.dispatch(push("dashboard"));
    }

    toggleTheme() {
        this.props.dispatch(new ChangeTheme());
    }

    render() {

        return (
            <div>
                <TopBar
                    toggleTheme={ this.toggleTheme }
                    useDarkTheme={ this.props.useDarkTheme }
                    logout={ this.logout }
                    />
                {this.props.children}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Main)

