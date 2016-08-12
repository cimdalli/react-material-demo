// import { fromJS } from 'immutable';
import { Action, Reducer } from 'redux'
import { BaseAction } from '../utils/actionHelpers'
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

export const layoutReducer: Reducer<LayoutState> = (state = INITIAL_STATE, action: BaseAction) => {

    if (action instanceof ChangeTheme) {
        return {
            useDarkTheme: !state.useDarkTheme
        };
    }

    return state;
}