import IState from 'core/models/interfaces/IState'
import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux'
import { Dispatch } from 'redux'

import {
  ILoginStateProps,
  ILoginDispatchProps,
  ILoginReduxComponentProps,
} from '../root/models/interfaces/loginInfo'
import LoginView from './Login'
import { submitLoginInfo, clearSubmitMessage } from './redux/action'

const mapStateToProps: MapStateToProps<ILoginStateProps, unknown, IState> = (
  state: IState,
): ILoginStateProps => {
  return {
    message: state.authenReducer.loginReducer.message,
    pid: state.authenReducer.loginReducer.pid,
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<
  ILoginDispatchProps,
  ILoginReduxComponentProps
> = (dispatch: Dispatch): ILoginDispatchProps => {
  return {
    submitLogin: (info) => dispatch(submitLoginInfo(info)),
    clearMessage: () => dispatch(clearSubmitMessage()),
  }
}

const loginConnect = connect<
  ILoginStateProps,
  ILoginDispatchProps,
  ILoginReduxComponentProps,
  IState
>(
  mapStateToProps,
  mapDispatchToProps,
  // null,
  // { forwardRef: true }
)(LoginView)

export default loginConnect
