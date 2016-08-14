import { Action, BaseAction } from '../utils/actionHelpers'

const tokenKey = "auth";

@Action("LOGIN")
export class Login extends BaseAction {
    constructor(public token: string) {
        super();
    }

    getTokenKey() {
        return tokenKey;
    }
}


@Action("LOGOUT")
export class Logout extends BaseAction {
    getTokenKey() {
        return tokenKey;
    }
}