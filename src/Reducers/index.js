import {combineReducers} from 'redux'
import userReducer from './userReducer'
import adminReducer from './adminReducer'
import plugReducer from './plugReducer'

export default combineReducers({plugReducer,userReducer,adminReducer})