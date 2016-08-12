// import { fromJS } from 'immutable';
import { Action, Reducer } from 'redux'
// import { CHANGE_THEME } from '../constants/actionTypes'
import { ChangeTheme } from '../actions'

// const INITIAL_STATE = fromJS({
//     useDarkTheme: false,
// });

const INITIAL_STATE: LayoutState = {
    useDarkTheme: false,
};


export interface LayoutState {
    useDarkTheme: boolean;
}

export const layoutReducer: Reducer<LayoutState> = (state = INITIAL_STATE, action: Action) => {

    switch (action.type) {

        case ChangeTheme.type: {
            return {
                useDarkTheme: !state.useDarkTheme
            };
        }

        default:
            return state;
    }
}
