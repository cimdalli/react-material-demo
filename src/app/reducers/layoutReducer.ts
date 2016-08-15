import { ReducerBuilder } from '../utils/reducerBuilder'
import { ChangeTheme, ShowLoading, HideLoading } from '../actions'


export interface LayoutState {
    useDarkTheme?: boolean;
    asyncCount?: number;
}

export const layoutReducer = new ReducerBuilder<LayoutState>()

    .init({
        useDarkTheme: false,
        asyncCount: 0
    })

    .action(ChangeTheme, (state) => {
        return {
            useDarkTheme: !state.useDarkTheme
        };
    })

    .action(ShowLoading, (state) => {
        let count = state.asyncCount;
        return {
            asyncCount: ++count
        };
    })

    .action(HideLoading, (state) => {
        let count = state.asyncCount;
        return {
            asyncCount: --count
        };
    })

    .build();