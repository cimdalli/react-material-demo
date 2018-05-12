import { createAction } from 'redux-ts'

interface LoginPayload {
  username: string
  password: string
}

interface SetTokenPayload {
  token?: string
}

export const Login = createAction<LoginPayload>('Login')

export const Logout = createAction('Logout')

export const SetToken = createAction<SetTokenPayload>('SetToken')
