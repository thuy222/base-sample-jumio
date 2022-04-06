import { combineReducers } from 'redux'
import authenReducer from 'src/components/Views/Authen/root/reducer'
import identityReducer from 'src/components/Views/Identity/IdentityMainView/redux/reducer'

const rootReducer = combineReducers({ authenReducer, identityReducer })
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
