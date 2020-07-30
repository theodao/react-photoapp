import { takeLatest, put, call } from 'redux-saga/effects';
import CategoryActions, { CategoryTypes } from '../reducer/categoryReducer';
import { getListCategories } from '../../services/api';

function* fetchCategories({ payload }) {
  try {
    yield put(CategoryActions.setIsFetching(true));

    const { page = 2, limit = 10 } = payload;

    // const response = yield call(getListCategories, page, limit);

    yield put(CategoryActions.setIsFetching(false));
  } catch (error) {
    console.log(error);
  }
}

function* fetchItems({ payload }) {
  console.log(payload);
}

export default [
  takeLatest(CategoryTypes.FETCH_CATEGORIES, fetchCategories),
  takeLatest(CategoryTypes.FETCH_ITEMS, fetchItems),
];
