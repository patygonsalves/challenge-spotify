import { all, fork } from 'redux-saga/effects'

// saga
import auth from './auth';
import search from './search';


export default function* root() {
  yield all([
    fork(auth),
    fork(search),
  ])
}
