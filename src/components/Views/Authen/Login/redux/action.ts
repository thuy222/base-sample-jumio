import { ILoginInfo } from '../../root/models/interfaces/loginInfo'
import { LoginSubmitAction, LoginSubmitMessageClear } from './types'

export const submitLoginInfo = (loginInfo: ILoginInfo) => {
  return LoginSubmitAction(loginInfo)
}

export const clearSubmitMessage = () => {
  return LoginSubmitMessageClear()
}
