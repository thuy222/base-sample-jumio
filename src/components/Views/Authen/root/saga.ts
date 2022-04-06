import { SagaIterator } from 'redux-saga'
import { all, fork } from 'redux-saga/effects'
import loginSaga from 'src/components/Views/Authen/Login/redux/saga'

export default function* rootSaga(): SagaIterator {
  yield all([fork(loginSaga)])
}
