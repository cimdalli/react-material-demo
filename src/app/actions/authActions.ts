import { Action, SyncAction, AsyncAction } from '../utils/actionHelpers'
import { push } from 'react-router-redux'


const tokenKey = "auth";


@Action
export class LoginRequest extends AsyncAction {
    constructor(public username: string, public password: string) {
        super();

        this.then(dispatch => {
            fetch(`https://httpbin.org/get?username=${username}&password=${password}`)
                .then(x => x.json())
                .then(data => {
                    dispatch(new Login(data.args.username + "|" + data.args.password));
                    dispatch(push("dashboard"));
                });
            return this;
        });
    }
}

@Action
export class Login extends SyncAction {
    constructor(public token: string) {
        super();
    }

    getTokenKey() {
        return tokenKey;
    }
}

@Action
export class Logout extends AsyncAction {
    constructor() {
        super();

        this.then(dispatch => {
            dispatch(push("dashboard"));
            return this;
        });
    }

    getTokenKey() {
        return tokenKey;
    }
}