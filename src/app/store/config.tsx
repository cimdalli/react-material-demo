import { Store, createStore } from 'redux';
import rootReducer from '../reducers/root'

const initialState = {};
export default createStore(rootReducer, initialState);