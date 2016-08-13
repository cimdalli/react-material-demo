import * as _ from 'lodash'

import { Reducer } from 'redux'
import { BaseAction, isType } from '../utils/actionHelpers'
import { ChangeTheme } from '../actions'


const INITIAL_STATE: LayoutState = {
    useDarkTheme: false
};


export interface LayoutState {
    useDarkTheme: boolean;
}

export const layoutReducer: Reducer<LayoutState> = (state = INITIAL_STATE, action: BaseAction) => {

    if (isType(action, ChangeTheme)) {
        return _.merge({}, state, {
            useDarkTheme: !state.useDarkTheme
        });
    }

    return state;
}