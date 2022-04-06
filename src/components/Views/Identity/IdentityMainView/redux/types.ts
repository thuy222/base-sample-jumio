import { createAction } from '@reduxjs/toolkit'
import { Action } from 'redux'

import identityInterface, { type } from '../../root/models/interfaces/identity'

export enum ActionType {
  GetToken = 'GET_TOKEN',
  GetTokenSuccess = 'GET_TOKEN_SUCCESS',
  GetTokenFail = 'GET_TOKEN_FAIL',
}

export interface IGetTokenAction extends Action {
  type: ActionType.GetTokenSuccess
  payload: string | undefined
}
export interface IGetTokenSuccessAction extends Action {
  type: ActionType.GetTokenSuccess
  payload: string
}
export interface IGetTokenFailAction extends Action {
  type: ActionType.GetTokenFail
  error: string
}

export const GetTokenAction = createAction<string | undefined>(ActionType.GetToken)
export const GetTokenSuccessAction = createAction<identityInterface[type.getTokenResponse]>(
  ActionType.GetTokenSuccess,
)
export const GetTokenFailAction = createAction<Error | unknown>(ActionType.GetTokenFail)
