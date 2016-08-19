import { ReducerBuilder } from '../utils/reducerBuilder'
import { Login, Logout } from '../actions'
import { push } from 'react-router-redux'


export interface AuthState {
    token?: string;
}

export const authReducer = new ReducerBuilder<AuthState>()
    .init({})

    .handle(Login, (state, action) => {
        const token = action.token;

        localStorage.setItem(action.getTokenKey(), token);

        return {
            token: token
        };
    })

    .handle(Logout, (state, action) => {
        localStorage.removeItem(action.getTokenKey());

        return {
            token: null
        };
    })

    .build();