import { ReducerBuilder } from 'redux-ts'
import { Login, Logout, SetToken, ShowLoading, HideLoading } from '../actions'
import { push } from 'react-router-redux'


export interface AuthState {
    token?: string;
}

export const authReducer = new ReducerBuilder<AuthState>()
    .init({})

    .handle(Login, (state, action) => {

        action.then(dispatch => {
            dispatch(new ShowLoading());
            return fetch(`https://httpbin.org/delay/3?username=${action.username}&password=${action.password}`)
                .then(x => x.json())
                .then(data => {
                    dispatch(new SetToken(data.args.username + "|" + data.args.password));
                    dispatch(push("/dashboard"));
                })
                .finally(() => {
                    dispatch(new HideLoading());
                })
        });

        return state;
    })


    .handle(Logout, (state, action) => {

        action.then(dispatch => {
            dispatch(new SetToken(null));
            dispatch(push("/dashboard"));
        });

        return state;
    })


    .handle(SetToken, (state, action) => {

        if (action.token != null) {
            localStorage.setItem(action.getTokenKey(), action.token);
        }
        else {
            localStorage.removeItem(action.getTokenKey());
        }

        return {
            token: action.token
        };
    })


    .build();