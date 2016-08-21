import { Action, SyncAction, AsyncAction } from 'redux-ts'


@Action
export class Login extends AsyncAction {
    constructor(public username: string, public password: string) {
        super();
    }
}

@Action
export class Logout extends AsyncAction { }


@Action
export class SetToken extends SyncAction {
    constructor(public token: string) {
        super();
    }
    getTokenKey() {
        return "auth";
    }
}