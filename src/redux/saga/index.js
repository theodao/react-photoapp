import { all } from 'redux-saga/effects';

/** All saga  */
import authSaga from './auth';
import categorySaga from './category';

export default function* root() {
  yield all([...authSaga, ...categorySaga]);
}
