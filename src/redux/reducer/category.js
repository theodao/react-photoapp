import { createReducer } from 'reduxsauce';
import produce from 'immer';
import { CategoryTypes } from '../actions/category';

/** Initial State */
const INITIAL_STATE = {
  categories: [],
  totalCategories: 0,
  items: [],
  currentItem: {},
  totalItems: 0,
  isFetching: true,
  isFetchingItem: true,
};

/** Reducers */
const setCategories = (state, { payload: data }) =>
  produce(state, (draft) => {
    draft.categories = data;
  });

const setTotalCategories = (state, { payload: data }) =>
  produce(state, (draft) => {
    draft.totalCategories = data;
  });

const setItems = (state, { payload: data }) =>
  produce(state, (draft) => {
    draft.items = data;
  });

const setTotalItems = (state, { payload: data }) =>
  produce(state, (draft) => {
    draft.totalItems = data;
  });

const setCurrentItem = (state, { payload: data }) =>
  produce(state, (draft) => {
    draft.currentItem = data;
  });

const setItemDetail = (state, { payload: data }) =>
  produce(state, (draft) => {
    draft.items = draft.items.map((item) => {
      if (item.id === data.id) {
        return data;
      }

      return item;
    });
  });

const setIsFetching = (state, { payload: isFetching }) =>
  produce(state, (draft) => {
    draft.isFetching = isFetching;
  });

const setIsFetchingItem = (state, { payload: isFetchingItem }) =>
  produce(state, (draft) => {
    draft.isFetchingItem = isFetchingItem;
  });

/** Link reducer to Action Types */
export default createReducer(INITIAL_STATE, {
  [CategoryTypes.SET_CATEGORIES]: setCategories,
  [CategoryTypes.SET_ITEMS]: setItems,
  [CategoryTypes.SET_IS_FETCHING]: setIsFetching,
  [CategoryTypes.SET_IS_FETCHING_ITEM]: setIsFetchingItem,
  [CategoryTypes.SET_TOTAL_CATEGORY]: setTotalCategories,
  [CategoryTypes.SET_TOTAL_ITEM]: setTotalItems,
  [CategoryTypes.SET_CURRENT_ITEM]: setCurrentItem,
  [CategoryTypes.SET_ITEM_DETAIL]: setItemDetail,
});

/** Selector */
export const selectCategoryState = (state) => state.category;
export const selectCategories = (state) =>
  selectCategoryState(state).categories;
export const selectTotalCategories = (state) =>
  selectCategoryState(state).totalCategories;
export const selectIsFetching = (state) =>
  selectCategoryState(state).isFetching;
export const selectItems = (state) => selectCategoryState(state).items;
export const selectCurrentItems = (state) =>
  selectCategoryState(state).currentItem;
export const selectIsFetchingItem = (state) =>
  selectCategoryState(state).isFetchingItem;
export const selectTotalItems = (state) =>
  selectCategoryState(state).totalItems;
