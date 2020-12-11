import { takeLatest, put } from 'redux-saga/effects'


function* login({ payload }) {
  yield put({ type: 'AUTH/SUCCESS', payload })
}

export default function* sagas() {
  yield takeLatest('AUTH/LOGIN', login)
}
