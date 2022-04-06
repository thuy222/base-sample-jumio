import { NavigationComponentProps } from 'react-native-navigation'

export interface ILoginInfo {
  username: string
  password: string
}
export interface ILoginResult {
  message: string
  pid: string
}

export interface ILoginState {
  pid: string
  accessToken: string
  refreshToken: string
  message: string
}

export interface ILoginStateProps {
  message: string
  pid: string
}

export interface ILoginDispatchProps {
  submitLogin: (info: ILoginInfo) => void
  clearMessage: () => void
}

export interface ILoginReduxComponentProps extends ILoginDispatchProps, ILoginStateProps {}
export interface ILoginViewComponentProps
  extends NavigationComponentProps,
    ILoginReduxComponentProps {}
