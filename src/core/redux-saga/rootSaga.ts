// Imports: Dependencies
import { all, fork } from 'redux-saga/effects'
import authenSaga from 'src/components/Views/Authen/root/saga'
import identitySaga from 'src/components/Views/Identity/IdentityMainView/redux/saga'

export default function* rootSaga() {
  yield all([fork(authenSaga), fork(identitySaga)])
}
