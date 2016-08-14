import * as Layout from "./layoutReducer"
import * as Auth from "./authReducer"
import { ReducersMapObject } from 'redux'


export interface StoreState {
    layout: Layout.LayoutState
    auth: Auth.AuthState
}

export const reducers: ReducersMapObject = {
    layout: Layout.layoutReducer,
    auth: Auth.authReducer
}