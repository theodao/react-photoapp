import { all } from 'redux-saga/effects';

/** All saga  */
import authSaga from './authSaga';

export default function* root() {
  yield all([...authSaga]);
}
