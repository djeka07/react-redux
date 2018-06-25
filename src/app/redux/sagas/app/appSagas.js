import { put, takeLatest } from 'redux-saga/effects'
import { APPTYPE as TYPE } from '../../types'

export function* fetchAppSettings() {
  try {
    yield put({ type: TYPE.FETCH_APP_SETTINGS_SUCCESS, data: mockData })
  } catch (error) {
    yield put({ type: TYPE.FETCH_APP_SETTINGS_FAILURE, data: error })
  }
}

export default function*() {
  yield takeLatest(TYPE.FETCH_APP_SETTINGS_REQUEST, fetchAppSettings)
}


const mockData = {
  language: 'sv'
}
