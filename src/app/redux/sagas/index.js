/* eslint-disable global-require */
import { fork, all } from 'redux-saga/effects'

export const waitAll = sagas => function* genTasks() {
  yield all([sagas.map(([saga, ...params]) => fork(saga, ...params))])
}

export function* rootSaga() {
  yield all([
    fork(require('./home/homeSagas').default),
    fork(require('./app/appSagas').default)
  ])
}
