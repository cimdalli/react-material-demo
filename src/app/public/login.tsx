import * as React from 'react';
import Paper  from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { EnterHook, RouteProps, RouterContext  } from 'react-router'


interface LoginProps {

}

export default class Login extends React.Component<LoginProps, any>{

    constructor(props: LoginProps, state: any) {
        super(props, state);
        var asd = this.context;
        debugger;
        this.login = this.login.bind(this);
    }

    refs: {
        [key: string]: Element | React.Component<any, any>,
        username?: TextField
        password?: TextField
    }

    // context:{
    //     router: 
    // }

    componentWillMount() {

        if (!!localStorage.getItem("auth")) {
            // this.props..push('/login');
        }
    }

    login() {
        var username = this.refs.username.getValue();
        var password = this.refs.password.getValue();

        localStorage.setItem("auth", "auth");
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