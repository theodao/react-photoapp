import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

const { Types, Creators } = createActions({
  setCategories: ['payload'],
  setItems: ['payload'],
  setIsFetching: ['payload'],
  fetchCategories: ['payload'],
  fetchItems: ['payload'],
  addItem: ['payload'],
  addCategory: ['payload'],
});

export const CategoryTypes = Types;
export default Creators;

/** Initial State */
const INITIAL_STATE = {
  categories: [],
  items: [],
  isFetching: true,
};

/** Reducers */
const setCategories = (state, { payload: data }) =>
  produce(state, (draft) => {
    draft.categories = data;
  });

const setItems = (state, { payload: data }) =>
  produce(state, (draft) => {
    draft.items = data;
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
});
