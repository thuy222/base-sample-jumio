import IState from 'core/models/interfaces/IState'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { IIdentityDispatchProps } from '../root/models/interfaces/identity'
import IdentityView from './Identity'
import { getToken } from './redux/action'

const mapStateToProps = (state: IState) => {
  return {
    loginState: state.authenReducer.loginReducer,
    identityState: state.identityReducer,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): IIdentityDispatchProps => {
  return {
    getToken: (accountId) => dispatch(getToken(accountId)),
  }
}

const identityConnect = connect(mapStateToProps, mapDispatchToProps)(IdentityView)

export default identityConnect
