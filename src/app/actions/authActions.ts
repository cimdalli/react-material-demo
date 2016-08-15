import { Action, SyncAction, AsyncAction } from '../utils/actionHelpers'
import { push } from 'react-router-redux'


const tokenKey = "auth";

@Action("LOGIN")
export class Login extends AsyncAction {
    constructor(public username: string, public password: string) {
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

@Action("LOGOUT")
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