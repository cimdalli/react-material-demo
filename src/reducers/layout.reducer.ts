import { ReducerBuilder } from 'redux-ts'
import { LayoutState } from '../models/store.model'
import {
  ChangeTheme,
  ShowLoading,
  HideLoading,
} from '../actions/layout.actions'

export const layout = new ReducerBuilder<LayoutState>()

  .init({
    useDarkTheme: false,
    asyncCount: 0,
  })

  .handle(ChangeTheme, state => {
    return {
      ...state,
      useDarkTheme: !state.useDarkTheme,
    }
  })

  .handle(ShowLoading, state => {
    let count = state.asyncCount
    return {
      ...state,
      asyncCount: ++count,
    }
  })

  .handle(HideLoading, state => {
    let count = state.asyncCount
    return {
      ...state,
      asyncCount: --count,
    }
  })
