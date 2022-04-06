import { AxiosResponse } from 'axios'
import { fork, all, put, call, takeLatest } from 'redux-saga/effects'

import identityInterface, { type } from '../../root/models/interfaces/identity'
import * as services from '../../root/services'
import { ActionType, GetTokenSuccessAction, GetTokenFailAction, IGetTokenAction } from './types'

function* getToken({ payload }: IGetTokenAction) {
  try {
    console.log('getToken::::::')
    const response: AxiosResponse<identityInterface[type.getTokenResponse]> = yield call(
      services.getToken,
      payload,
    )
    const data: identityInterface[type.getTokenResponse] = response.data
    yield put(GetTokenSuccessAction(data))
  } catch (err) {
    yield put(GetTokenFailAction(err))
  }
}

function* watchgetToken() {
  yield takeLatest(ActionType.GetToken, getToken)
}

export default function* rootSaga() {
  yield all([fork(watchgetToken)])
}
