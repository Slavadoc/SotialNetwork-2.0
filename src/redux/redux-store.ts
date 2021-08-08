import {combineReducers} from 'redux'
import usersReducer from './users-reducer'

let store = combineReducers({
  usersPage: usersReducer
})

export default store;
