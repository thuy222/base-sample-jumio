import { combineReducers } from 'redux'
import loginReducer from '../Login/redux/reducer'

const authenReducer = combineReducers({
  loginReducer,
})

export default authenReducer
