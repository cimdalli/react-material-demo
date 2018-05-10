import { SyncAction } from 'redux-ts'

export class Login extends SyncAction {
  constructor(public username: string, public password: string) {
    super()
  }
}

export class Logout extends SyncAction {}

export class SetToken extends SyncAction {
  static key = 'auth'
  constructor(public token?: string) {
    super()
  }
  getTokenKey() {
    return SetToken.key
  }
}
