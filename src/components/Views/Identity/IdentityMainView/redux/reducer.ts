import { createReducer } from '@reduxjs/toolkit'

import { identityStatus } from './state'
import { ActionType } from './types'

const identityReducer = createReducer(identityStatus, {
  [ActionType.GetTokenSuccess]: (state, action) => {
    state.sdkToken = action.payload.sdk.token
  },
  [ActionType.GetTokenFail]: (state, action) => {
    state.error = action.payload
  },
})

export type State = ReturnType<typeof identityReducer>

export default identityReducer
