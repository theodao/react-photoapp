import { takeLatest } from 'redux-saga/effects';
import CategoryActions, { CategoryTypes } from '../reducer/categoryReducer';

function* fetchCategories({ payload }) {
  console.log(payload);
}

function* fetchItems({ payload }) {
  console.log(payload);
}

export default [
  takeLatest(CategoryTypes.FETCH_CATEGORIES, fetchCategories),
  takeLatest(CategoryTypes.FETCH_ITEMS, fetchItems),
];
