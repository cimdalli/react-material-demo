import * as Layout from "./layoutReducer"
import { ReducersMapObject } from 'redux'


export interface StoreState {
    layout: Layout.LayoutState
}

export const reducers: ReducersMapObject = {
    layout: Layout.layoutReducer
}