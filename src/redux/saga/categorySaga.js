import { takeLatest, put, call } from 'redux-saga/effects';
import _get from 'lodash/get';
import CategoryActions, { CategoryTypes } from '../reducer/categoryReducer';
import {
  getListCategories,
  getListItems,
  getItemDetail,
  createNewCategory,
  createNewItem,
  deleteItemDetail,
  updateItemDetail,
} from '../../services/api';
import { mappingErrorResponse } from '../../utils/helper';

export function* fetchCategories({ payload }) {
  try {
    yield put(CategoryActions.setIsFetching(true));

    const { offset = 1, limit = 10 } = payload;

    const response = yield call(getListCategories, offset, limit);
    if (response.status === 200) {
      const categories = _get(response, 'data.categories', []);
      const totalCategories = _get(response, 'data.total_categories', 0);

      yield put(CategoryActions.setCategories(categories));
      yield put(CategoryActions.setTotalCategory(totalCategories));
    }
    yield put(CategoryActions.setIsFetching(false));
  } catch (error) {
    yield put(CategoryActions.setIsFetching(false));
  }
}

export function* fetchItems({ payload }) {
  try {
    yield put(CategoryActions.setIsFetching(true));
    const { offset = 1, limit = 10, id } = payload;
    const response = yield call(getListItems, offset, limit, id);
    if (response.status === 200) {
      const items = _get(response, 'data.items', []);
      const totalItems = _get(response, 'data.total_items', 0);

      yield put(CategoryActions.setItems(items));
      yield put(CategoryActions.setTotalItem(totalItems));
    }
    yield put(CategoryActions.setIsFetching(false));
  } catch (error) {
    yield put(CategoryActions.setIsFetching(false));
  }
}

export function* fetchItem({ payload }) {
  try {
    yield put(CategoryActions.setIsFetching(true));
    const { categoryId, itemId } = payload;
    const response = yield call(getItemDetail, categoryId, itemId);
    if (response.status === 200) {
      const item = _get(response, 'data', {});
      yield put(CategoryActions.setCurrentItem(item));
    }
    yield put(CategoryActions.setIsFetching(false));
  } catch (error) {
    yield put(CategoryActions.setIsFetching(false));
  }
}

export function* addItem({ payload }) {
  const {
    photoUrl,
    description,
    id,
    onSuccess = () => {},
    onFailure = () => {},
  } = payload;

  try {
    const response = yield call(createNewItem, {
      photoUrl,
      description,
      id,
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

export function* deleteItem({ payload }) {
  const { categoryId, itemId, onSuccess, onFailure } = payload;
  try {
    const response = yield call(deleteItemDetail, categoryId, itemId);
    if (response.status === 200) {
      yield put(CategoryActions.setCurrentItem({}));
      onSuccess();
    }
  } catch (error) {
    const message = _get(error, 'data.message');

    const errorList = mappingErrorResponse(message);
    onFailure(errorList);
  }
}

export function* updateItem({ payload }) {
  const { categoryId, itemId, onSuccess, onFailure, data } = payload;
  try {
    const response = yield call(updateItemDetail, categoryId, itemId, data);
    if (response.status === 200) {
      console.log(response);
      onSuccess();
    }
  } catch (error) {
    const message = _get(error, 'data.message');

    const errorList = mappingErrorResponse(message);
    onFailure(errorList);
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

export default [
  takeLatest(CategoryTypes.FETCH_CATEGORIES, fetchCategories),
  takeLatest(CategoryTypes.FETCH_ITEMS, fetchItems),
  takeLatest(CategoryTypes.FETCH_ITEM_DETAIL, fetchItem),
  takeLatest(CategoryTypes.ADD_CATEGORY, addCategory),
  takeLatest(CategoryTypes.ADD_ITEM, addItem),
  takeLatest(CategoryTypes.DELETE_ITEM, deleteItem),
  takeLatest(CategoryTypes.UPDATE_ITEM, updateItem),
];
