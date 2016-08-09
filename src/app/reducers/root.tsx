import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
    useDarkTheme: false,
});

export default function rootReducer(state = INITIAL_STATE, action = { type: '' }) {
    switch (action.type) {

        case "CHANGE_THEME":
            return state.update('useDarkTheme', (value: any) => value + 1);

        default:
            return state;
    }
}