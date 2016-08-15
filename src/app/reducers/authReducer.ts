import { ReducerBuilder } from '../utils/reducerBuilder'
import { Login, Logout } from '../actions'
import { push } from 'react-router-redux'


export interface AuthState {
    token?: string;
}

export const authReducer = new ReducerBuilder<AuthState>()
    .init({})

    .action(Login, (state, action) => {
        //async Login
        let  username = action.username;
        let  password = action.password;

        const token = "token";

        localStorage.setItem(action.getTokenKey(), token);
        
        return {
            token: token
        };
    })

    .action(Logout, (state, action) => {
        localStorage.removeItem(action.getTokenKey());
        
        return {
            token: null
        };
    })

    .build();