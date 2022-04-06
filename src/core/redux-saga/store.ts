import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducers from './rootReducer'
import rootSaga from './rootSaga'
// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware()
const middleWares = [sagaMiddleware, logger]

const store = createStore(rootReducers, applyMiddleware(...middleWares))

sagaMiddleware.run(rootSaga)
export default store
