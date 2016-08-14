import { ReducerBuilder } from '../utils/reducerBuilder'
import { ChangeTheme } from '../actions'


export interface LayoutState {
    useDarkTheme: boolean;
}

export const layoutReducer = new ReducerBuilder<LayoutState>()

    .init({
        useDarkTheme: false
    })

    .action(ChangeTheme, (state) => {
        return {
            useDarkTheme: !state.useDarkTheme
        };
    })

    .build();