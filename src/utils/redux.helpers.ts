import { StoreState } from '../models/store.model'
import { ActionCreatorDefinition, StateToProps } from 'redux-ts'

export const mapStoreToProps: StateToProps<StoreState> = map => map
