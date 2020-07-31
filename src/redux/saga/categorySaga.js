import { takeLatest, put, call } from 'redux-saga/effects';
import CategoryActions, { CategoryTypes } from '../reducer/categoryReducer';
import { getListCategories, createNewCategory } from '../../services/api';

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

function* addCategory({ payload }) {
  const { name, description, photoUrl } = payload;

  try {
    const response = yield call(createNewCategory, {
      name,
      description,
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

function addItem({ payload }) {
  console.log(payload);
}

export default [
  takeLatest(CategoryTypes.FETCH_CATEGORIES, fetchCategories),
  takeLatest(CategoryTypes.FETCH_ITEMS, fetchItems),
  takeLatest(CategoryTypes.ADD_CATEGORY, addCategory),
  takeLatest(CategoryTypes.ADD_ITEM, addItem),
];
