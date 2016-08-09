import { Action } from 'redux'

export function changeTheme(): Action {
    return {
        type: "CHANGE_THEME",
    };
}
