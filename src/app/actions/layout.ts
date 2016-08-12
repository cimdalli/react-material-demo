import { Action } from 'redux'
// import { CHANGE_THEME } from '../constants/actionTypes'

// export function changeTheme(): Action {
//     return {
//         type: CHANGE_THEME
//     };
// }

export class ChangeTheme implements Action {
    type: string = "CHANGE_THEME";
    static type = "CHANGE_THEME";
}