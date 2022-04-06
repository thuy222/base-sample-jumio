import { createAction } from '@reduxjs/toolkit'
import { Action } from 'redux'

import { ILoginInfo, ILoginResult } from '../../root/models/interfaces/loginInfo'

export enum LoginActionType {
  SubmitLoginInfo = 'SUBMIT_LOGIN_INFO',
  SubmitLoginInfoSuccess = 'SUBMIT_LOGIN_SUCCESS',
  SubmitLoginInfoFail = 'SUBMIT_LOGIN_FAIL',
  ClearMessage = 'SUBMIT_LOGIN_MESSAGE_CLEAR',
}

export interface ILoginSubmitAction extends Action {
  type: LoginActionType.SubmitLoginInfo
  payload: ILoginInfo
}
export interface ILoginSubmitSuccessAction extends Action {
  type: LoginActionType.SubmitLoginInfoSuccess
  payload: string
}
export interface ILoginSubmitFailAction extends Action {
  type: LoginActionType.SubmitLoginInfoSuccess
  payload: string
}

export const LoginSubmitAction = createAction<ILoginInfo>(LoginActionType.SubmitLoginInfo)
export const LoginSubmitSuccessAction = createAction<ILoginResult>(
  LoginActionType.SubmitLoginInfoSuccess,
)
export const LoginSubmitFailAction = createAction<string>(LoginActionType.SubmitLoginInfoFail)
export const LoginSubmitMessageClear = createAction(LoginActionType.ClearMessage)
