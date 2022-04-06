import { fork, all, put, takeLeading } from 'redux-saga/effects'

import { ILoginSubmitAction, LoginActionType, LoginSubmitSuccessAction } from './types'

function* submitLoginInfo(action: ILoginSubmitAction) {
  const { payload } = action
  // TODO: remove
  console.log(payload)
  yield put(LoginSubmitSuccessAction({ pid: 'sssss-sssss-ssss', message: 'success' }))
}
function* watchSubmitLoginInfo() {
  yield takeLeading<ILoginSubmitAction>(LoginActionType.SubmitLoginInfo, submitLoginInfo)
}

export default function* rootSaga() {
  yield all([fork(watchSubmitLoginInfo)])
}
