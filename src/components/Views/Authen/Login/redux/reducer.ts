import { createReducer } from '@reduxjs/toolkit'
import loginState from './state'
import { LoginActionType } from './types'

const loginReducer = createReducer(loginState, {
  [LoginActionType.SubmitLoginInfoSuccess]: (state, action) => {
    state.message = action.payload.message
    state.pid = action.payload.pid
  },
  [LoginActionType.SubmitLoginInfoFail]: (state, action) => {
    state.message = action.payload
  },
  [LoginActionType.ClearMessage]: (state) => {
    state.message = ''
  },
})

export default loginReducer
