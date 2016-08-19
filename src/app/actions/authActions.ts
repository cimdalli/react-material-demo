import { Action, SyncAction, AsyncAction } from '../utils/actionHelpers'
import { push } from 'react-router-redux'


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