import { ReducerBuilder } from 'redux-ts'
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

    .handle(ChangeTheme, (state) => {
        return {
            useDarkTheme: !state.useDarkTheme
        };
    })

    .handle(ShowLoading, (state) => {
        let count = state.asyncCount;
        return {
            asyncCount: ++count
        };
    })

    .handle(HideLoading, (state) => {
        let count = state.asyncCount;
        return {
            asyncCount: --count
        };
    })

    .build();