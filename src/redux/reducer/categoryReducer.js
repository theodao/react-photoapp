import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

const { Types, Creators } = createActions({
  setCategories: ['payload'],
  setTotalCategory: ['payload'],
  setItems: ['payload'],
  setTotalItem: ['payload'],
  setIsFetching: ['payload'],
  setCurrentItem: ['payload'],
  fetchCategories: ['payload'],
  fetchItems: ['payload'],
  fetchItemDetail: ['payload'],
  addItem: ['payload'],
  addCategory: ['payload'],
});

export const CategoryTypes = Types;
export default Creators;

/** Initial State */
const INITIAL_STATE = {
  categories: [],
  totalCategories: 0,
  items: [],
  currentItem: {},
  totalItems: 0,
  isFetching: true,
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

const setIsFetching = (state, { payload: isFetching }) =>
  produce(state, (draft) => {
    draft.isFetching = isFetching;
  });

/** Link reducer to Action Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_CATEGORIES]: setCategories,
  [Types.SET_ITEMS]: setItems,
  [Types.SET_IS_FETCHING]: setIsFetching,
  [Types.SET_TOTAL_CATEGORY]: setTotalCategories,
  [Types.SET_TOTAL_ITEM]: setTotalItems,
  [Types.SET_CURRENT_ITEM]: setCurrentItem,
});
