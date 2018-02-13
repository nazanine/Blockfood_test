import { createStore } from 'redux'
import  mainReducer from './mainReducers'

const store = createStore(mainReducer)

export default store;
