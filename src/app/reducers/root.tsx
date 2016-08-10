// import { fromJS } from 'immutable';
import { Action } from 'redux'

// const INITIAL_STATE = fromJS({
//     useDarkTheme: false,
// });

const INITIAL_STATE = {
    useDarkTheme: false,
};

export default function rootReducer(state = INITIAL_STATE, action: Action) {

    switch (action.type) {

        case "CHANGE_THEME": {
            let newState = !state.useDarkTheme;
            return { useDarkTheme: newState };
        }

        default:
            return state;
    }
}