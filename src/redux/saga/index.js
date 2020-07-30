import { all } from 'redux-saga/effects';

/** All saga  */
import authSaga from './authSaga';
import categorySaga from './categorySaga';
import appSaga from './appSaga';

export default function* root() {
  yield all([...authSaga, ...categorySaga, ...appSaga]);
}
