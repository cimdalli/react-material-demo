import * as React from 'react';
import { Router, IRouterContext } from '../../../decorators/router'
import Paper  from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


@Router
export default class Login extends React.Component<any, any>{

    constructor(props: any, state: any) {
        super(props, state);
        this.login = this.login.bind(this);
    }

    refs: {
        [key: string]: Element | React.Component<any, any>,
        username?: TextField
        password?: TextField
    }

    context: IRouterContext;

    login() {
        var username = this.refs.username.getValue();
        var password = this.refs.password.getValue();

        localStorage.setItem("auth", "auth");
        this.context.router.push("dashboard");
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