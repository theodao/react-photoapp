import { all } from 'redux-saga/effects';

/** All saga  */
import authSaga from './authSaga';
import categorySaga from './categorySaga';

export default function* root() {
  yield all([...authSaga, ...categorySaga]);
}
