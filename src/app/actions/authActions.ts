import { SyncAction, AsyncAction } from 'redux-ts'


export class Login extends AsyncAction {
    constructor(public username: string, public password: string) {
        super();
    }
}

export class Logout extends AsyncAction { }


export class SetToken extends SyncAction {
    constructor(public token: string) {
        super();
    }
    getTokenKey() {
        return "auth";
    }
}