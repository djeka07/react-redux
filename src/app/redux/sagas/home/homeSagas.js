import { put, takeLatest } from 'redux-saga/effects'
import { HOMETYPE as TYPE } from '../../types'

export function* fetchHomeData() {
  try {
    yield put({ type: TYPE.FETCH_HOME_SUCCESS, data: mockData })
  } catch (error) {
    yield put({ type: TYPE.FETCH_HOME_FAILURE, data: error })
  }
}

export default function*() {
  yield takeLatest(TYPE.FETCH_HOME_REQUEST, fetchHomeData)
}

const mockData = {
  metaTitle: 'Hem',
  metaDescription: 'Välkommen',
  title: 'Hem',
  teaserText: 'text'
}
