import { combineReducers, createStore } from 'redux';
import {CartReducer} from './reducers/CartReducer';


const rootReducer = combineReducers({
    CartReducer
})


export const store = createStore(rootReducer)
