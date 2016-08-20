import { ReducerBuilder } from '../utils/reducerBuilder'
import { Login, Logout, SetToken } from '../actions'
import { push } from 'react-router-redux'


export interface AuthState {
    token?: string;
    inProgress?: boolean;
}

export const authReducer = new ReducerBuilder<AuthState>()
    .init({})

    .handle(Login, (state, action) => {
        
        if (!state.inProgress) {
            action.then(dispatch => {
                fetch(`https://httpbin.org/get?username=${action.username}&password=${action.password}`)
                    .then(x => x.json())
                    .then(data => {
                        dispatch(new SetToken(data.args.username + "|" + data.args.password));
                        dispatch(push("/dashboard"))
                    });
            });
        }

        return {
            inProgress: true
        };
    })


    .handle(Logout, (state, action) => {

        action.then(dispatch => {
            dispatch(new SetToken(null));
            dispatch(push("/dashboard"));
        });

        return null;
    })


    .handle(SetToken, (state, action) => {

        if (action.token != null) {
            localStorage.setItem(action.getTokenKey(), action.token);
        }
        else {
            localStorage.removeItem(action.getTokenKey());
        }

        return {
            token: action.token,
            inProgress: false
        };
    })


    .build();