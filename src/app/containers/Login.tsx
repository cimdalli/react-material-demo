import * as React from 'react';

import { connect } from 'react-redux'
import { Dispatch } from "redux";
import { LoginRequest } from '../actions'

import Paper  from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


interface LoginProps {
    dispatch: Dispatch<any>;
}

class LoginContainer extends React.Component<LoginProps, any>{

    constructor() {
        super();

        this.login = this.login.bind(this);
    }

    refs: {
        [key: string]: Element | React.Component<any, any>,
        username?: TextField
        password?: TextField
    }

    login() {
        var username = this.refs.username.getValue();
        var password = this.refs.password.getValue();

        this.props.dispatch(new LoginRequest(username, password));
    }

    render() {
        const containerStyle: React.CSSProperties = {
            display: "inline-block",
            padding: "30px",
            marginTop: "200px"
        };
        const buttonStyle: React.CSSProperties = {
            marginTop: "40px"
        };

        return (
            <Paper
                style={containerStyle}
                >
                <TextField
                    floatingLabelText="User name"
                    ref="username"
                    id="username"
                    />
                <br />
                <TextField
                    floatingLabelText="Password"
                    ref="password"
                    type="password"
                    id="password"
                    />
                <br />
                <RaisedButton
                    style={buttonStyle}
                    primary={true}
                    label="Login"
                    onClick={this.login}
                    />
            </Paper>
        );
    }
}

export default connect()(LoginContainer)