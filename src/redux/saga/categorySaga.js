import { takeLatest, put, call } from 'redux-saga/effects';
import _get from 'lodash/get';
import CategoryActions, { CategoryTypes } from '../reducer/categoryReducer';
import {
  getListCategories,
  createNewCategory,
  createNewItem,
} from '../../services/api';
import { mappingErrorResponse } from '../../utils/helper';

export function* fetchCategories({ payload }) {
  try {
    yield put(CategoryActions.setIsFetching(true));

    const { page = 1, limit = 10 } = payload;

    const response = yield call(getListCategories, page, limit);
    if (response.status === 200) {
      const categories = _get(response, 'data.categories', []);
      const totalCategories = _get(response, 'data.total_categories', 0);

      yield put(CategoryActions.setCategories(categories));
      yield put(CategoryActions.setTotalCategory(totalCategories));
    }
    yield put(CategoryActions.setIsFetching(false));
  } catch (error) {
    console.log(error);
    yield put(CategoryActions.setIsFetching(false));
  }
}

export function* fetchItems({ payload }) {
  const { photoUrl, description, categoryId } = payload;

  try {
    const response = yield call(
      createNewItem,
      {
        photoUrl,
        description,
      },
      categoryId,
    );
  } catch (error) {
    console.log(error);
  }
}

export function* addCategory({ payload }) {
  const { name, description, photoUrl, onSuccess, onFailure } = payload;

  try {
    const response = yield call(createNewCategory, {
      name,
      description,
      image_url: photoUrl,
    });

    if (response.status === 201) {
      onSuccess();
    }
  } catch (error) {
    const message = _get(error, 'data.message');

    const errorList = mappingErrorResponse(message);
    onFailure(errorList);
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
