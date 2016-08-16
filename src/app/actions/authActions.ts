import { Action, SyncAction } from '../utils/actionHelpers'
import { push } from 'react-router-redux'


const tokenKey = "auth";


// @Action("LOGIN_REQUEST")
// export class LoginRequest extends AsyncAction {
//     constructor(public username: string, public password: string) {
//         super();

//         this.then(dispatch => {
//             fetch(`https://httpbin.org/get?username=${username}&password=${password}`)
//                 .then(x => x.json())
//                 .then(data => {
//                     dispatch(new Login(data.args.username + "|" + data.args.password));
//                 });
//             return this;
//         });
//     }
// }

// @Action("LOGIN")
// export class Login extends AsyncAction {
//     constructor(public token: string) {
//         super();

//         this.then(dispatch => {
//             dispatch(push("dashboard"));
//             return this;
//         });
//     }

//     getTokenKey() {
//         return tokenKey;
//     }
// }




// @Action("LOGOUT")
// export class Logout extends AsyncAction {
//     constructor() {
//         super();

//         this.then(dispatch => {
//             dispatch(push("dashboard"));
//             return this;
//         });
//     }

//     getTokenKey() {
//         return tokenKey;
//     }
// }

@Action("")
export const Logout: SyncAction = () => {
}